class VideoController < ApplicationController
  def index
    respond_to do |f|
      f.html
      f.js {render json: @video}
    end
  end

  def new
    respond_to do |f|
      f.html
      f.json { render json: @video}
    end
  end

  def create
    @video = Video.new(params[:video])
    respond_to do |f|
      if @video.save
        f.html { redirect_to(@video)}
        f.json { render :json => @video }
      else
        f.html {render :action => "new" }
        f.json {render :json => @video }
      end
    end
  end

  def video_params
    params.require(:video).permit(:yt_id, :title, :views, :thumbnail)
  end
end

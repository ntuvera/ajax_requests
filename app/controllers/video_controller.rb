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
    binding.pry
    @video = Video.create(yt_id: video_params[:yt_id],
                          title: video_params[:title],
                          views: video_params[:views],
                          thumbnail: video_params[:thumbnail])
    respond_to do |f|
      if
        f.html { redirect_to(@video)}
        f.json { render :json => @video.to_json }
      end
    end
  end

  def video_params
    params.require(:video).permit(:yt_id, :title, :views, :thumbnail)
  end
end

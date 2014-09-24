class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :yt_id
      t.string :title
      t.integer :views
      t.string :thumbnail

      t.timestamps
    end
  end
end

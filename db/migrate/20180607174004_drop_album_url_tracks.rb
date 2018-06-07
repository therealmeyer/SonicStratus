class DropAlbumUrlTracks < ActiveRecord::Migration[5.1]
  def change
    remove_column :tracks, :album_image_url
  end
end

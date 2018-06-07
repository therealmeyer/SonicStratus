class AddImageToTracks < ActiveRecord::Migration[5.1]
  def self.up
    add_attachment :tracks, :image
  end

  def self.down
    remove_attachment :tracks, :image
  end
end

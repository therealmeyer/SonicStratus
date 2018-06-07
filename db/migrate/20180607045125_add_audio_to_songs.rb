class AddAudioToSongs < ActiveRecord::Migration[5.1]
  # https://devcenter.heroku.com/articles/paperclip-s3
  def self.up 
    add_attachment :tracks, :audio
  end 

  def self.down 
    remove_attachment :tracks, :audio
  end 
end

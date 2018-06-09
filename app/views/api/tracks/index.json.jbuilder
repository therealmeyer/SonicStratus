@tracks.each do |track|
  json.set! track.id do
    json.extract! track, :id, :title, :user_id, :description
    json.user track.user.username
    json.album_url "https:" + track.image.url(:original, timestamp: false)
    json.audio_url "https:" + track.audio.url(:original, timestamp: false)
  end 
end 
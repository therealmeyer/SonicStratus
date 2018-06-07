@tracks.each do |track|
  json.set! track.id do
    json.extract! track, :id, :title, :user_id, :description
    json.album_url track.image.url 
    json.audio_url track.audio.url
  end
end 
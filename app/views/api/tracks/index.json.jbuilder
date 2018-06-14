@tracks.each do |track|
  json.set! track.id do
    json.extract! track, :id, :title, :user_id, :description, :genre, :peaks, :duration
    json.user track.user.username
    json.album_url "https:" + track.image.url(:original, timestamp: false)
    json.audio_url "https:" + track.audio.url(:original, timestamp: false)
    json.comment_ids track.comments.pluck(:id)
    json.comment_count track.comments.length
  end 
end 

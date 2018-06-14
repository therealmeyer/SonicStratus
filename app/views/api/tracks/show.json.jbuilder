
json.track do 
  json.extract! @track, :id, :title, :user_id, :description, :year, :genre, :peaks, :duration
  json.user @track.user.username
  json.album_url "https:" + @track.image.url(:original, timestamp: false)
  json.audio_url "https:" + @track.audio.url(:original, timestamp: false)
  json.comment_ids @track.comments.pluck(:id)
  json.comment_count @track.comments.length
end 

json.comments do 
  @track.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :track_id, :user_id
      json.username comment.user.username
      json.user_img comment.user.profile_image.url
      json.timestamp comment.time_ago + " ago"
    end 
  end 
end 


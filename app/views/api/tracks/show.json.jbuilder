json.extract! @track, :id, :title, :user_id, :description, :year, :genre 
json.album_url @track.image.url
json.audio_url @track.audio.url

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Track.destroy_all

ryan = User.create(username: 'ryan', password: 'password')

demo = User.create(username: 'user', password: 'password')

odesza = User.create(username: 'Odesza', password: 'inreturn', 
  profile_image: File.open(Rails.root.join("app", "assets", "images/media_seeds/odesza.jpg")), 
  header_image: File.open(Rails.root.join("app", "assets", "images/media_seeds/moment_apart_tour.jpg")))

drake = User.create(username: 'Drake', password: 'ovocrew', 
  profile_image: File.open(Rails.root.join("app", "assets", "images/media_seeds/ovo.jpg")), 
  header_image: File.open(Rails.root.join("app", "assets", "images/media_seeds/drake-banner.jpg")))

foster = User.create(username: 'Foster', password: 'pumpedkicks',
  profile_image: File.open(Rails.root.join("app", "assets", "images/media_seeds/foster-user.jpg")), 
  header_image: File.open(Rails.root.join("app", "assets", "images/media_seeds/foster-cover.png")))

flume = User.create(username: 'Flume', password: 'lockjaw', 
  profile_image: File.open(Rails.root.join("app", "assets", "images/media_seeds/flume-user.jpeg")), 
  header_image: File.open(Rails.root.join("app", "assets", "images/media_seeds/flume-cover.jpg")))

emmit = User.create(username: 'Emmit Fenn', password: 'password', 
  profile_image: File.open(Rails.root.join("app", "assets", "images/media_seeds/emmit-fenn-user.jpg")), 
  header_image: File.open(Rails.root.join("app", "assets", "images/media_seeds/emitt-fenn-cover.jpg")))


whitelies = Track.create(user_id: odesza.id, title: "White Lies", 
  description: "From the album 'In Return', out now on Counter-Records.\n
  Download 'In Return' on iTunes. \nOrder 'In Return' in 2xLP Vinyl, 24-bit WAV, 16-bit WAV, and MP3.", 
  year: 2015,
  image: File.open(Rails.root.join("app", "assets", "images/media_seeds/in-return.jpg")), 
  audio: File.open(Rails.root.join("app", "assets", "images/media_seeds/white-lies.mp3")))

how = Track.create(user_id: odesza.id, title: "How Did I Get Here", year: 2013,
  description: "Stream and Download Summer's Gone \n \nDownload our official app",
  image: File.open(Rails.root.join("app", "assets", "images/media_seeds/summers-gone.jpg")), 
  audio: File.open(Rails.root.join("app", "assets", "images/media_seeds/how-did-i.mp3")))

meridian = Track.create(user_id: odesza.id, title: "Meridian", year: 2017,
  description: " Imaginary circle in a plane perpendicular to the planes of the celestial equator and horizon\n\n
  An imaginary arc on the Earth's surface from the North Pole to the South Pole",
  image: File.open(Rails.root.join("app", "assets", "images/media_seeds/moment-apart.jpg")), 
  audio: File.open(Rails.root.join("app", "assets", "images/media_seeds/meridian.mp3")))

boy = Track.create(user_id: odesza.id, title: "Boy", year: 2017,
  description: "A boy is a young male human, usually a child or adolescent. \n When he becomes an adult, he is described as a man.",
  image: File.open(Rails.root.join("app", "assets", "images/media_seeds/moment-apart.jpg")), 
  audio: File.open(Rails.root.join("app", "assets", "images/media_seeds/boy.mp3")))

gp = Track.create(user_id: drake.id, title: "God's Plan", year: 2018,
  description: "God's plan, or the Will of God. \n The saving of a soul from sin and its consequences",
  image: File.open(Rails.root.join("app", "assets", "images/media_seeds/scary_hours.jpg")), 
  audio: File.open(Rails.root.join("app", "assets", "images/media_seeds/gods-plan.mp3")))

sit = Track.create(user_id: foster.id, title: "Sit Next to Me", year: 2018,
  description: "Released by:\nColumbia\n\nRelease date:\n21 July 2017\n\nP-line:\n
℗ 2017 (P) 2017 Columbia Records, a Division of Sony Music Entertainment",
  image: File.open(Rails.root.join("app", "assets", "images/media_seeds/sacred-hearts.jpg")), 
  audio: File.open(Rails.root.join("app", "assets", "images/media_seeds/sit-next-to-me.mp3")))

pumpedkicks = Track.create(user_id: foster.id, title: "Pumped Up Kicks", year: 2010,
  image: File.open(Rails.root.join("app", "assets", "images/media_seeds/torches.jpg")), 
  audio: File.open(Rails.root.join("app", "assets", "images/media_seeds/pumpedup-kicks.mp3")))
  
never = Track.create(user_id: flume.id, title: "Never Be Like You", 
  image: File.open(Rails.root.join("app", "assets", "images/media_seeds/skin.jpg")), 
  audio: File.open(Rails.root.join("app", "assets", "images/media_seeds/never-be-like.mp3")))

thisong =  Track.create(user_id: flume.id, title: "This Song is Not About a Girl", 
  image: File.open(Rails.root.join("app", "assets", "images/media_seeds/lockjaw.jpg")), 
  audio: File.open(Rails.root.join("app", "assets", "images/media_seeds/this_song_is.mp3")))

insane = Track.create(user_id: flume.id, title: "Insane", 
  image: File.open(Rails.root.join("app", "assets", "images/media_seeds/flume.jpg")), 
  audio: File.open(Rails.root.join("app", "assets", "images/media_seeds/insane.mp3")))

modern_flame =  Track.create(user_id: emmit.id, title: "Modern Flame", 
  image: File.open(Rails.root.join("app", "assets", "images/media_seeds/prologue2.jpg")), 
  audio: File.open(Rails.root.join("app", "assets", "images/media_seeds/modern-flame.mp3")))

sunset_lover = Track.create(user_id: demo.id, title: "Sunset Lover", 
  image: File.open(Rails.root.join("app", "assets", "images/media_seeds/sunset-lover.jpg")), 
  audio: File.open(Rails.root.join("app", "assets", "images/media_seeds/sunset-lover.mp3")))


Comment.create(user_id: demo.id, track_id: whitelies.id, body: 'Sweet!')
Comment.create(user_id: flume.id, track_id: whitelies.id, body: 'Dope beats')
Comment.create(user_id: flume.id, track_id: whitelies.id, body: 'Nice :)')
Comment.create(user_id: drake.id, track_id: whitelies.id, body: 'OVO Sound')


Comment.create(user_id: demo.id, track_id: how.id, body: 'Sweet!')
Comment.create(user_id: flume.id, track_id: how.id, body: 'Vibes')
Comment.create(user_id: flume.id, track_id: how.id, body: 'Nice :) but way too short')
Comment.create(user_id: emmit.id, track_id: how.id, body: 'My fav track! ')

Comment.create(user_id: ryan.id, track_id: modern_flame.id, body: 'So under-rated')
Comment.create(user_id: foster.id, track_id: modern_flame.id, body: 'Great song!')
Comment.create(user_id: odesza.id, track_id: modern_flame.id, body: 'Chills...')
Comment.create(user_id: odesza.id, track_id: modern_flame.id, body: 'Yassssss')

Comment.create(user_id: drake.id, track_id: pumpedkicks.id, body: 'hohooohoo')
Comment.create(user_id: odesza.id, track_id: pumpedkicks.id, body: 'Yesyesyes')
Comment.create(user_id: demo.id, track_id: pumpedkicks.id, body: 'Totally! ')
Comment.create(user_id: demo.id, track_id: pumpedkicks.id, body: 'My Jam!')



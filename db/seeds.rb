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

odesza = User.create(username: 'Odesza', password: 'inreturn')

drake = User.create(username: 'Drake', password: 'ovocrew')

foster = User.create(username: 'Foster', password: 'pumpedkicks')

flume = User.create(username: 'Flume', password: 'lockjaw')

emmit = User.create(username: 'Emmit Fenn', password: 'password')


whitelies = Track.create(user_id: odesza.id, title: "White Lies", 
  image: File.open("/Users/ryan/downloads/in-return.jpg"), 
  audio: File.open("/Users/ryan/downloads/white-lies.mp3"))

how = Track.create(user_id: odesza.id, title: "How Did I Get Here", 
  image: File.open("/Users/ryan/downloads/summers-gone.jpg"), 
  audio: File.open("/Users/ryan/downloads/how-did-i.mp3"))

meridian = Track.create(user_id: odesza.id, title: "Meridian", 
  image: File.open("/Users/ryan/downloads/moment-apart.jpg"), 
  audio: File.open("/Users/ryan/downloads/meridian.mp3"))

boy = Track.create(user_id: odesza.id, title: "Boy", 
  image: File.open("/Users/ryan/downloads/moment-apart.jpg"), 
  audio: File.open("/Users/ryan/downloads/boy.mp3"))

gp = Track.create(user_id: drake.id, title: "God's Plan", 
  image: File.open("/Users/ryan/downloads/scary_hours.jpg"), 
  audio: File.open("/Users/ryan/downloads/gods-plan.mp3"))

sit = Track.create(user_id: foster.id, title: "Sit Next to Me", 
  image: File.open("/Users/ryan/downloads/sacred-hearts.jpg"), 
  audio: File.open("/Users/ryan/downloads/sit-next-to-me.mp3"))

pumpedkicks = Track.create(user_id: foster.id, title: "Pumped Up Kicks", 
  image: File.open("/Users/ryan/downloads/torches.jpg"), 
  audio: File.open("/Users/ryan/downloads/pumpedup-kicks.mp3"))
  
never = Track.create(user_id: flume.id, title: "Never Be Like You", 
  image: File.open("/Users/ryan/downloads/skin.jpg"), 
  audio: File.open("/Users/ryan/downloads/never-be-like.mp3"))

thisong =  Track.create(user_id: flume.id, title: "This Song is Not About a Girl", 
  image: File.open("/Users/ryan/downloads/lockjaw.jpg"), 
  audio: File.open("/Users/ryan/downloads/this_song_is.mp3"))

insane = Track.create(user_id: flume.id, title: "Insane", 
  image: File.open("/Users/ryan/downloads/flume.jpg"), 
  audio: File.open("/Users/ryan/downloads/insane.mp3"))

modern_flame =  Track.create(user_id: emmit.id, title: "Modern Flame", 
  image: File.open("/Users/ryan/downloads/prologue2.jpg"), 
  audio: File.open("/Users/ryan/downloads/modern-flame.mp3"))

painting = Track.create(user_id: emmit.id, title: "Painting Greys", 
  image: File.open("/Users/ryan/downloads/prologue.jpg"), 
  audio: File.open("/Users/ryan/downloads/painting-greys.mp3"))




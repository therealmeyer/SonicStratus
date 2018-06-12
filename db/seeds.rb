# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Track.destroy_all

ryan = User.create!(username: 'ryan', password: 'password')

demo = User.create!(username: 'user', password: 'password')

odesza = User.create!(username: 'Odesza', password: 'inreturn')

drake = User.create!(username: 'Drake', password: 'ovocrew')

foster = User.create!(username: 'Foster', password: 'pumpedkicks')

flume = User.create!(username: 'Flume', password: 'lockjaw')

emmit = User.create!(username: 'Emmit Fenn', password: 'password')


whitelies = Track.create(user_id: odesza.id, title: "White Lies", 
  image: File.open(Rails.root.join("app", "assets", "images/media_seeds/in-return.jpg")), 
  audio: File.open(Rails.root.join("app", "assets", "images/media_seeds/white-lies.mp3")))

# how = Track.create(user_id: odesza.id, title: "How Did I Get Here", 
#   image: File.open("./media_seeds/summers-gone.jpg"), 
#   audio: File.open("./media_seeds/how-did-i.mp3"))

# meridian = Track.create(user_id: odesza.id, title: "Meridian", 
#   image: File.open("../media_seeds/moment-apart.jpg"), 
#   audio: File.open("../media_seeds/meridian.mp3"))

# boy = Track.create(user_id: odesza.id, title: "Boy", 
#   image: File.open("../media_seeds/moment-apart.jpg"), 
#   audio: File.open("../media_seeds/boy.mp3"))

# gp = Track.create(user_id: drake.id, title: "God's Plan", 
#   image: File.open("../media_seeds/scary_hours.jpg"), 
#   audio: File.open("../media_seeds/gods-plan.mp3"))

# sit = Track.create(user_id: foster.id, title: "Sit Next to Me", 
#   image: File.open("../media_seeds/sacred-hearts.jpg"), 
#   audio: File.open("../media_seeds/sit-next-to-me.mp3"))

# pumpedkicks = Track.create(user_id: foster.id, title: "Pumped Up Kicks", 
#   image: File.open("../media_seeds/torches.jpg"), 
#   audio: File.open("../media_seeds/pumpedup-kicks.mp3"))
  
# never = Track.create(user_id: flume.id, title: "Never Be Like You", 
#   image: File.open("../media_seeds/skin.jpg"), 
#   audio: File.open("../media_seeds/never-be-like.mp3"))

# thisong =  Track.create(user_id: flume.id, title: "This Song is Not About a Girl", 
#   image: File.open("../media_seeds/lockjaw.jpg"), 
#   audio: File.open("../media_seeds/this_song_is.mp3"))

# insane = Track.create(user_id: flume.id, title: "Insane", 
#   image: File.open("../media_seeds/flume.jpg"), 
#   audio: File.open("../media_seeds/insane.mp3"))

# modern_flame =  Track.create(user_id: emmit.id, title: "Modern Flame", 
#   image: File.open("../media_seeds/prologue2.jpg"), 
#   audio: File.open("../media_seeds/modern-flame.mp3"))

# sunset_lover = Track.create(user_id: demo.id, title: "Sunset Lover", 
#   image: File.open("../media_seeds/sunset-lover.jpg"), 
#   audio: File.open("../media_seeds/sunset-lover.mp3"))


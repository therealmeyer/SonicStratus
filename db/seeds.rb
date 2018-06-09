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

drake = User.create(username: 'Drake', password: 'ovocrew')

foster = User.create(username: 'Foster', password: 'pumpedkicks')

gp = Track.create(user_id: drake.id, title: "God's Plan", 
  image: File.open("/Users/ryan/downloads/scary_hours.jpg"), 
  audio: File.open("/Users/ryan/downloads/gods-plan.mp3"))

sit = Track.create(user_id: foster.id, title: "Sit Next to Me", 
  image: File.open("/Users/ryan/downloads/sacred-hearts.jpg"), 
  audio: File.open("/Users/ryan/downloads/sit-next-to-me.mp3"))

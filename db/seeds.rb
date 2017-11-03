# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(first_name: "Trey", last_name: "Anastasio", email: "123@abc.com")

startup1 = Startup.create(category: "Coding Bootcamp", user_id: user1.id, name: "Launch Academy", description: "Launch Academy is a 10-week, immersive bootcamp for aspiring software developers", desired_funding: 1000000, current_funding: 20000,
shares_available: 1000, photo_url: "https://www.launchacademy.com/assets/home-hero-2-d173fc2af4966d5d532899bb64235c1af2d3a8eaf6d90a5b234437ae1fc3ea84.png", start_date: Date.new(2017, 11, 1), end_date: Date.new(2017, 11, 30))

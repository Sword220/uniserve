# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
8.times do 
  name = Faker::GameOfThrones.character
  image = Faker::Avatar.image(name, "50x50")
  title = Faker::Company.profession
  email = Faker::Internet.safe_email
  phone = Faker::PhoneNumber.cell_phone
  Staff.create(name: name, image: image, title: title, email: email, phone: phone)
end

9.times do
  name = Faker::GameOfThrones.character
  image = Faker::Avatar.image(name, "50x50")
  title = Faker::Company.profession
  email = Faker::Internet.safe_email
  phone = Faker::PhoneNumber.cell_phone
  Wea.create(name: name, image: image, title: title, email: email, phone: phone)
end

11.times do
  name = Faker::GameOfThrones.character
  image = Faker::Avatar.image(name, "50x50")
  title = Faker::Company.profession
  email = Faker::Internet.safe_email
  phone = Faker::PhoneNumber.cell_phone
  Oea.create(name: name, image: image, title: title, email: email, phone: phone)
end

puts 'seeded'

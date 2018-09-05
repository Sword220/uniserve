# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
8.times do 
  Staff.create(
    image: Faker::Avatar.image("50 x 50"),
    name: Faker::GameOfThrones.character,
    title: Faker::Dessert.topping,
    email: Faker::Internet.safe_email,
    phone: Faker::PhoneNumber.cell_phone,
  )
end

puts 'seeded'

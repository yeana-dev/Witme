# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
User.destroy_all
Post.destroy_all
Category.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@admin.com', password: '123456')

@studygroup = Category.create!(category_name: 'study_group')
@sideproject = Category.create!(category_name: 'side_project')

5.times do
  Post.create!(title: Faker::Lorem.sentence(word_count: 3), content: Faker::Lorem.paragraphs, skills: Faker::ProgrammingLanguage.name, user: @admin, category: @studygroup)
end
5.times do
  Post.create!(title: Faker::Lorem.sentence(word_count: 3), content: Faker::Lorem.paragraphs, skills: Faker::ProgrammingLanguage.name, user: @admin, category: @sideproject)
end


puts "#{User.count} users created!"
puts "#{Post.count} posts created!"
puts "#{Category.count} categories created!"
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
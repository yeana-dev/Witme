class User < ApplicationRecord
  has_many :posts, dependent: :destroy 
  has_secure_password

  validates :username, uniqueness: true, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }
end

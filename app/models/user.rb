class User < ApplicationRecord 

  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  before_validation :ensure_session_token

  has_attached_file :profile_image, default_url: "https://s3-us-west-1.amazonaws.com/sonicstratus/profile_img_url.png",
    styles: {
      thumb: '100x100>',
      square: '200x200#',
      medium: '300x300>',
      large: '400x400>'
    }
  validates_attachment_content_type :profile_image, content_type: /\Aimage\/.*\z/
  
  has_attached_file :header_image, default_url: "https://s3-us-west-1.amazonaws.com/sonicstratus/header_img.jpg"
  validates_attachment_content_type :header_image, content_type: /\Aimage\/.*\z/


  has_many :tracks
  has_many :comments
  
  def self.find_by_credentials(username, password) 
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end 

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end 

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end 

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end 

  # def ensure_profile_image 
  #   self.profile_img_url ||= ""
  # end 

  # def ensure_header_image
  #   self.header_img_url ||= ""
  # end 

  private 
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end 
end 


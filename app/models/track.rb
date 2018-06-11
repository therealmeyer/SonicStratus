class Track < ApplicationRecord
  validates :user_id, :title, presence: true
  # https://devcenter.heroku.com/articles/paperclip-s3
  # https://www.rubydoc.info/github/thoughtbot/paperclip/Paperclip/Validators/HelperMethods
  # https://rubyplus.com/articles/3821-File-Uploads-using-Paperclip-in-Rails-5
  attr_reader :audio_remote_url, :image_remote_url

  has_attached_file :audio
  validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\Z/
  validates_attachment_presence :audio
  has_attached_file :image, default_url: "//s3-us-west-1.amazonaws.com/sonicstratus/album.jpg",
    styles: {
      thumb: '100x100>',
      square: '200x200#',
      medium: '300x300>'
    }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :user
  
  def audio_remote_url=(url_value)
    self.audio = URI.parse(url_value)
    @audio_remote_url = url_value
  end 

  def image_remote_url=(url_value)
    self.image = URI.parse(url_value)
    @image_remote_url = url_value
  end 

end
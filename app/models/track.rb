class Track < ApplicationRecord
  validates :user_id, :title, presence: true
  # https://devcenter.heroku.com/articles/paperclip-s3
  # https://www.rubydoc.info/github/thoughtbot/paperclip/Paperclip/Validators/HelperMethods
  # https://rubyplus.com/articles/3821-File-Uploads-using-Paperclip-in-Rails-5

  has_attached_file :audio
  validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\Z/

  has_attached_file :image, default_url: "https://s3-us-west-1.amazonaws.com/sonicstratus/album.jpg",
    styles: {
      thumb: '100x100>',
      square: '200x200#',
      medium: '300x300>'
    }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  

  belongs_to :user
  
  # before_validation :convert_image_url
  # after_initialize :ensure_album_image_url

  # def convert_image_url 
  #   if self.image.url.include?("?")
  #     idx = find_query
  #     p idx
  #     prepend = "https:"
  #     mid = self.image.url[4..idx-1]
  #     self.image.url = prepend + mid
  #   end 
  # end 

  # private 


  # def find_query
  #   self.image.url.chars.each_with_index do |char, idx|
  #     if char == "?"
  #       return idx
  #     else 
  #       return nil
  #     end 
  #   end 
  # end 


  # def ensure_album_image_url
  #   self.album_image_url ||= "https://s3-us-west-1.amazonaws.com/sonicstratus/album.jpg"
  # end

end
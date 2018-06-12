json.extract! @user, :id, :username 
json.profile_img_url @user.profile_image.url
json.header_img_url @user.header_image.url
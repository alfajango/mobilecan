require './config/init.rb'

routes = ['battery_status', 'camera_streaming', 'image_capture', 'geolocate',
  'input_keyboards', 'filters', 'vibrate', 'accelerometer', 'homescreen_icon',
  'offline', 'vector']

Cuba.define do
  on get do
    on root do
      haml 'home'
    end

    routes.each do |route|
      on route do
        haml route
      end
    end

    on 'video' do
      haml 'video', video_url: session[:video_url]
    end
  end

  on post do
    on 'video_upload' do
      on param('video') do |video|
        uploader = VideoUploader.new
        uploader.store! video
        session[:video_url] = uploader.url
        res.redirect '/video'
      end
    end
  end
end

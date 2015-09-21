require './config/init.rb'

routes = ['battery_status', 'camera_streaming', 'image_capture', 'geolocate',
  'input_keyboards', 'filters', 'vibrate', 'accelerometer', 'homescreen_icon',
  'offline', 'vector', 'video_capture']

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
  end

  on post do
    on 'video_upload' do
      on param('video') do |video|
        uploader = VideoUploader.new
        uploader.store! video
        haml 'video', video_url: uploader.url
      end
    end
  end
end

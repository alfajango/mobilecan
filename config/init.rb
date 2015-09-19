require 'cuba'
require 'cuba/safe'
require 'cuba/haml'
require 'haml'
require 'carrierwave'
require 'dotenv'
require './uploaders/video_uploader.rb'

Dotenv.load

CarrierWave.configure do |config|
  config.fog_credentials = {
    :provider               => 'AWS',
    :aws_access_key_id      => ENV['AWS_ACCESS_KEY_ID'],
    :aws_secret_access_key  => ENV['AWS_SECRET_ACCESS_KEY']
  }
  config.fog_directory  = ENV['S3_BUCKET']
end

Cuba.use Rack::Session::Cookie, secret: '__a_very_long_string__'

Cuba.plugin Cuba::Safe
Cuba.plugin Cuba::Haml
Cuba.settings[:haml][:template_engine] = "haml"

Cuba.use Rack::Static,
  root: 'public',
  urls: ['/js', '/css', '/img', 'manifest.json',
    'main.appcache', 'shopping_list.html']

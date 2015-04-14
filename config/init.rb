require 'rubygems'
require 'sinatra'
require 'carrierwave'
require 'dotenv'
require './video_uploader.rb'
Dotenv.load

configure :test do
  # rspec context looks for views relative to /spec dir unless specified
  set :views, File.dirname(__FILE__) + '/../views'
end


CarrierWave.configure do |config|
  config.fog_credentials = {
    :provider               => 'AWS',
    :aws_access_key_id      => ENV['AWS_ACCESS_KEY_ID'],
    :aws_secret_access_key  => ENV['AWS_SECRET_ACCESS_KEY']
  }
  config.fog_directory  = ENV['S3_BUCKET']
end
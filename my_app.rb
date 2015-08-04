require 'rubygems'
require 'sinatra'
require './config/init.rb'

enable :sessions, :logging

get '/' do
  haml :home
end

routes = [:battery_status, :camera_streaming, :image_capture, :geolocate,
  :input_keyboards, :filters, :vibrate, :accelerometer, :homescreen_icon, :offline]

routes.each do |route|
  get "/#{route}" do
    haml route
  end
end

post '/video_upload' do
  uploader = VideoUploader.new
  uploader.store! params[:video]
  session[:video_url] = uploader.url
  redirect to('/video')
end

get '/video' do
  @video_url = session[:video_url]
  haml :video
end
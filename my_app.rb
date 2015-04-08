require 'rubygems'
require 'sinatra'

require './config/init.rb'

get '/' do
  haml :index
end

routes = ['camera_still', 'camera_streaming', 'video', 'geolocate', 'input_types', 'filters', 'vibrate']

routes.each do |route|
  get "/#{route}" do
    haml route.to_sym
  end
end

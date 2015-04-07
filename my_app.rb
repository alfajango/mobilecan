require 'rubygems'
require 'sinatra'

require './config/init.rb'

get '/' do
  haml :index
end

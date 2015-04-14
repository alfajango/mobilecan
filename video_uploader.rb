class VideoUploader < CarrierWave::Uploader::Base
  storage :fog

  def store_directory
    "uploads"
  end
end

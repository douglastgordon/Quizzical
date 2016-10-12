class DeleteAudioUrlColumn < ActiveRecord::Migration
  def change
    remove_column :cards, :audio_url
  end
end

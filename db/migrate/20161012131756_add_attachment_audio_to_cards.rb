class AddAttachmentAudioToCards < ActiveRecord::Migration
  def self.up
    change_table :cards do |t|
      t.attachment :audio
    end
  end

  def self.down
    remove_attachment :cards, :audio
  end
end

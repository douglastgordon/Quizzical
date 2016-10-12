# == Schema Information
#
# Table name: cards
#
#  id         :integer          not null, primary key
#  term       :string           not null
#  definition :string           not null
#  audio_url  :string
#  deck_id    :integer
#

class Card < ActiveRecord::Base

  validates :term, :definition, :deck_id, presence: true

  has_attached_file :audio
  validates_attachment_content_type :audio, content_type: /\Aaudio\/.*\z/

  belongs_to :deck

end

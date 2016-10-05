# == Schema Information
#
# Table name: decks
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  author_id    :integer          not null
#  description  :text
#  term_lang_id :integer
#  def_lang_id  :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Deck < ActiveRecord::Base

  validates :title, :author_id, presence: true

  belongs_to :user

end

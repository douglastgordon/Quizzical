# == Schema Information
#
# Table name: decks
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  author_id    :integer          not null
#  description  :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  term_lang_id :integer          not null
#  def_lang_id  :integer          not null
#

class Deck < ActiveRecord::Base

  validates :title, :author_id, :term_lang_id, :def_lang_id, presence: true

  belongs_to(
    :author,
    class_name: :User
  )

  has_many :cards

  belongs_to(
    :term_language,
    class_name: :Language,
    foreign_key: :term_lang_id,
    primary_key: :id
  )

  belongs_to(
    :definition_language,
    class_name: :Language,
    foreign_key: :def_lang_id,
    primary_key: :id
  )

end

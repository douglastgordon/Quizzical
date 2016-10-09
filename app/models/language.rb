# == Schema Information
#
# Table name: languages
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Language < ActiveRecord::Base

  validates :name, presence: true, uniqueness: true

  has_many(
    :from_decks,
    class_name: :Deck,
    foreign_key: :term_lang_id,
    primary_key: :id
  )

  has_many(
    :to_decks,
    class_name: :Deck,
    foreign_key: :def_lang_id,
    primary_key: :id
  )

end

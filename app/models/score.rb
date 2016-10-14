# == Schema Information
#
# Table name: scores
#
#  id         :integer          not null, primary key
#  deck_id    :integer          not null
#  user_id    :integer          not null
#  score      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Score < ActiveRecord::Base

  validates :deck_id, :user_id, :score, presence: true

  belongs_to :deck
  belongs_to :user

end

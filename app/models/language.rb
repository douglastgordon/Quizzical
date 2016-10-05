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
  
end

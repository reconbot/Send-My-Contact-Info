class AuthorizedNumbers < ActiveRecord::Base
  attr_accessible :sid, :phone_number, :friendly_name
end
# == Schema Information
#
# Table name: authorized_numbers
#
#  id            :integer         not null, primary key
#  created_at    :datetime        not null
#  updated_at    :datetime        not null
#  sid           :string(255)
#  phone_number  :string(255)
#  friendly_name :string(255)
#


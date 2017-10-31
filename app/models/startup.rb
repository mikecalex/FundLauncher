class Startup < ApplicationRecord
  belongs_to :user

  validate :name, presence: true
  validate :description, presence: true
  validate :desired_funding, presence: true
  validate :current_funding, presence: true
  validate :shares_available, presence: true
  validate :photo_url, presence: true
  validate :start_date, presence: true
  validate :end_date, presence: true

end

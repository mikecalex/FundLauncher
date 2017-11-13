class Startup < ApplicationRecord
  has_many :investments
  has_many :users, through: :investments

  validates :name, presence: true
  validates :description, presence: true
  validates :desired_funding, presence: true
  validates :current_funding, presence: true
  validates :shares_available, presence: true
  validates :photo_url, presence: true
  validates :start_date_date, presence: true
  validates :end_date_date, presence: true

  #Uses third party date parser "Chronic" to parse friendly dates.
  include BetterDatePicker::Model
  better_date_picker :start_date
  better_date_picker :end_date

  def self.search(search)
    where("name ILIKE ? OR category ILIKE ? OR description ILIKE ?", "%#{search}%", "%#{search}%", "%#{search}%")
  end

  CATEGORIES = [
    "Tech",
    "Electronic",
    "Politics",
    "Games",
    "Social",
    "Entertainment",
    "Finance",
    "Music",
    "Other"
  ]

end

class Startup < ApplicationRecord
  belongs_to :user

  validates :name, presence: true
  validates :description, presence: true
  validates :desired_funding, presence: true
  validates :current_funding, presence: true
  validates :shares_available, presence: true
  validates :photo_url, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true

  def self.search(search)
    where("name ILIKE ? OR category ILIKE ? OR description ILIKE ?", "%#{search}%", "%#{search}%", "%#{search}%")
  end

end

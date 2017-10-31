class AddDateToStartups < ActiveRecord::Migration[5.1]
  def change
    add_column :startups, :start_date, :date, null: false
    add_column :startups, :end_date, :date, null: false
  end
end

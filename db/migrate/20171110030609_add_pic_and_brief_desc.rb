class AddPicAndBriefDesc < ActiveRecord::Migration[5.1]
  def change
    add_column :startups, :sec_pic, :string
    add_column :startups, :briefDesc, :text
  end
end

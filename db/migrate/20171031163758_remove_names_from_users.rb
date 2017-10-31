class RemoveNamesFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :first_name, :string
    remove_column :users, :last_name, :string
  end
  
end

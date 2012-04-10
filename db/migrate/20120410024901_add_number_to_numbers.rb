class AddNumberToNumbers < ActiveRecord::Migration
  def up
    add_column :authorized_numbers, :sid, :string
    add_column :authorized_numbers, :phone_number, :string
    add_column :authorized_numbers, :friendly_name, :string
  end
  
  def down
    remove_column :authorized_numbers, :sid
    remove_column :authorized_numbers, :phone_number
    remove_column :authorized_numbers, :friendly_name
  end
end

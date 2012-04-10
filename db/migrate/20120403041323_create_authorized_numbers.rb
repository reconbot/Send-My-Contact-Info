class CreateAuthorizedNumbers < ActiveRecord::Migration
  def change
    create_table :authorized_numbers do |t|

      t.timestamps
    end
  end
end

class AddLookingForColumnInPost < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :looking_for, :string
  end
end

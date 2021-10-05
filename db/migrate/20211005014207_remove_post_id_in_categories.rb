class RemovePostIdInCategories < ActiveRecord::Migration[6.1]
  def change
    remove_reference :categories, :post, foreign_key: true, index: true
  end
end

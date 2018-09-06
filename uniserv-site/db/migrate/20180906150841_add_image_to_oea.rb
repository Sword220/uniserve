class AddImageToOea < ActiveRecord::Migration[5.2]
  def change
    add_column :oeas, :image, :string
  end
end

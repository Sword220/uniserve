class AddImageToWea < ActiveRecord::Migration[5.2]
  def change
    add_column :weas, :image, :string
  end
end

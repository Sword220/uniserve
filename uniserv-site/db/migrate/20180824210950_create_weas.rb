class CreateWeas < ActiveRecord::Migration[5.2]
  def change
    create_table :weas do |t|
      t.string :name
      t.string :title
      t.string :email
      t.string :phone
      t.string :association

      t.timestamps
    end
  end
end

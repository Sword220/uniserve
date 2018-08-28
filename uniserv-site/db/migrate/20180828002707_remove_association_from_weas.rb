class RemoveAssociationFromWeas < ActiveRecord::Migration[5.2]
  def change
    remove_column :weas, :association, :string
  end
end

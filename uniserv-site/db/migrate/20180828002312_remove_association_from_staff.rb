class RemoveAssociationFromStaff < ActiveRecord::Migration[5.2]
  def change
    remove_column :staffs, :association, :string
  end
end

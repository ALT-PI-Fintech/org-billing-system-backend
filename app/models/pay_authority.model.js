import { DataTypes, NOW } from "sequelize";
import { connection } from "../config/db.js";

export const pay_authority = connection.define(
    'pay_authority', 
    {
    payAuthority_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    payAuthority_code: {
      type: DataTypes.STRING(4),
      allowNull: true,
      unique: true
    },
    payAuthority_description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payAuthority_note: {
      type: DataTypes.BLOB('long'),
      allowNull: false
    },
    payAuthority_status: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      // defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      // defaultValue: DataTypes.NOW
    }
  },


{

    // Freeze Table Name
    freezeTableName: true,
    timestamps:true
  }
);  
import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

export const role_master = connection.define(
  "role_master",
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    user_type: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    role: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },

  },
  {
    // Freeze Table Name
    freezeTableName: true,
    timestamps: true,
  }
);

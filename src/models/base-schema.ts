import { Schema, Types } from "mongoose";

export interface IBaseEntity {
  createdBy?: Types.ObjectId;
  modifiedBy?: Types.ObjectId;
  createdAt?: Date;
  modifiedAt?: Date;
}

export function createBaseSchema<T extends object>(fields: T) {
  return new Schema<T & IBaseEntity>(
    {
      ...fields,

      createdBy: {
        type: Schema.Types.ObjectId,
        required: true,
      },

      modifiedBy: {
        type: Schema.Types.ObjectId,
        required: true,
      },
    },
    {
      timestamps: {
        createdAt: "createdAt",
        updatedAt: "modifiedAt",
      },
    },
  );
}
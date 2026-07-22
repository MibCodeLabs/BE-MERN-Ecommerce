import { Schema, model, Types } from "mongoose";
import type { IRefreshToken } from "../interface/model/IRefreshToken.js";
import { logger } from "../util/logger.js";

export const RefreshTokenSchema = new Schema<IRefreshToken>(
  {
    accountId: {
      type: Types.ObjectId,
      required: true,
      index: true,
    },

    accountType: {
      type: String,
      enum: ["customer", "shop", "staff"],
      required: true,
    },

    tokenHash: {
      type: String,
      required: true,
      unique: true,
    },

    expiresAt: {
      type: Date,
      required: true,
    },

    revokedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

RefreshTokenSchema.index(
  {
    accountId: 1,
    accountType: 1,
  },
  {
    unique: true,
  },
);


RefreshTokenSchema.index(
  {
    expiresAt: 1,
  },
  {
    expireAfterSeconds: 0,
  },
);

RefreshTokenSchema.pre("save", async function () {
    //we add this condition here for max single session
  if (!this.isNew) {
    return;
  }

  logger.warn("Deleting existing refresh tokens for id:"+this.accountId+" - type: "+this.accountType)
  await this.model("RefreshToken").deleteMany({
    accountId: this.accountId,
    accountType: this.accountType,
  });
});

export const RefreshToken = model<IRefreshToken>(
  "RefreshToken",
  RefreshTokenSchema,
);

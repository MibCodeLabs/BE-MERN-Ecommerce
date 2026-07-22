import bcrypt from "bcryptjs";
import { JWT_DEFAULTS } from "../constant/constants.js";


export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, JWT_DEFAULTS.SALT_ROUNDS);
}

export async function comparePassword(
  password: string,
  hash: string,
): Promise<boolean> {
  return bcrypt.compare(password, hash);
  
}

import crypto from "crypto";

export const hashPassword = (password: string): string =>
  crypto.pbkdf2Sync(password, "secretsalt", 1000, 64, "sha512").toString("hex");

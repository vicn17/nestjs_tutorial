import * as mongoose from 'mongoose';

export const AccountSchema = new mongoose.Schema({
  acc_name: String,
  acc_pass: String,
  acc_email: String,
  acc_phone: String,
  acc_role: Number,
  acc_created_at: { type: Date, default: Date.now() },
});

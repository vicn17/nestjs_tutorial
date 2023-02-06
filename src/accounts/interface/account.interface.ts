import { Document } from 'mongoose';

export interface Account extends Document {
  readonly acc_name: string;
  acc_pass: string;
  readonly acc_email: string;
  readonly acc_phone: string;
  readonly acc_role: number;
}

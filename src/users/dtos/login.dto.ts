import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  ur_email: string;

  @IsNotEmpty()
  ur_pass: string;
}

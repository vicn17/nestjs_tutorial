import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  ur_name: string;

  @IsNotEmpty()
  ur_email: string;

  @IsNotEmpty()
  ur_pass: string;
}

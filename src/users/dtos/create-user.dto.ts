import { IsNotEmpty } from 'class-validator';
import { Role } from 'src/auth/enums/role.enum';

export class CreateUserDto {
  @IsNotEmpty()
  ur_name: string;

  @IsNotEmpty()
  ur_email: string;

  @IsNotEmpty()
  ur_pass: string;

  @IsNotEmpty()
  ur_role: Role;
}

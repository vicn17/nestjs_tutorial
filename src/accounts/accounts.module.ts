import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { DatabaseModule } from 'src/db/db.module';
import { accountsProviders } from './accounts.providers';
import { JwtModule } from '@nestjs/jwt/dist';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '1d' } }),
  ],
  controllers: [AccountsController],
  providers: [AccountsService, ...accountsProviders],
})
export class AccountsModule {}

import { CatsModule } from './cats/cats.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [CatsModule, AccountsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

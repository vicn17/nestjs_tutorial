import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
// import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './interface/account.interface';
import { Response } from 'express';

@Controller('accounts/')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post('create')
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.create(createAccountDto);
  }

  @Get('findAll')
  findAll(): Promise<Account[]> {
    return this.accountsService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: string, @Res() res: Response) {
    res.json(id);
  }

  @Post('checkLogin')
  async checkLogin(@Body() body: any, @Res() res: Response) {
    const check = await this.accountsService.checkAccount(
      body.acc_email,
      body.acc_pass,
    );
    //* Trả về access_token kiểu boolen
    return res.json({ access_token: check });
  }
}

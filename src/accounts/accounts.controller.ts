import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
// import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './interface/account.interface';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';

@Controller('accounts/')
export class AccountsController {
  constructor(
    private readonly accountsService: AccountsService,
    private jwtService: JwtService,
  ) {}

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
    const account = await this.accountsService.checkAccount(
      body.acc_email,
      body.acc_pass,
    );
    const jwt = await this.jwtService.signAsync({ id: account.id });
    const giai = await this.jwtService.verifyAsync(jwt);
    return res.json({ access_token: jwt, giai: giai });
  }
}

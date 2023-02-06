import { Inject, Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Model } from 'mongoose';
import { Account } from './interface/account.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AccountsService {
  constructor(@Inject('ACCOUNT_MODEL') private accountModel: Model<Account>) {}

  async create(createAccountDto: CreateAccountDto): Promise<Account> {
    const createdAccount = new this.accountModel(createAccountDto);

    //* hash password
    const salt = await bcrypt.genSalt();
    await bcrypt
      .hash(createdAccount.acc_pass, salt)
      .then((pass) => (createdAccount.acc_pass = pass));

    //* create new doc
    return createdAccount.save();
  }

  findAll(): Promise<Account[]> {
    return this.accountModel.find().exec();
  }

  async checkAccount(acc_email: string, acc_pass: string) {
    //* tìm tới thằng email của user xong lấy ra để so sánh pass đã mã hóa trả về giá trị boolen
    return this.accountModel
      .findOne({ acc_email: acc_email })
      .then((account) => {
        return bcrypt.compareSync(acc_pass, account.acc_pass);
      });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} account`;
  // }

  // update(id: number, updateAccountDto: UpdateAccountDto) {
  //   return `This action updates a #${id} account`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} account`;
  // }
}

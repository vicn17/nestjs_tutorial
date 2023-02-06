import { Controller, Res, Get } from '@nestjs/common';

import { Response } from 'express';

@Controller()
export class AppController {
  @Get('')
  getHello(@Res() res: Response) {
    // return this.appService.getHello();
    res.json('lsdflkj');
  }
}

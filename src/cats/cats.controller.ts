import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(): string {
        return 'finding all cats';
    }
}

@Controller({ host: 'admin.localhost' })
export class AdminController {
  @Get()
  index(): string {
    return 'Admin page';
  }
}
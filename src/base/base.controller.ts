import { Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { IBaseService } from './IBase.service'
import { BaseEntity } from './base.entity';

export class BaseController<T extends BaseEntity> {

  constructor(private readonly baseService: IBaseService<T>) { }

  @Get()
  getAll() {
    return this.baseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.baseService.findOne(id);
  }

  @Post()
  create(@Body() t: T) {
    delete t._id;
    return this.baseService.create(t);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() t: T) {
    const entity = this.baseService.update(t);
    if (!entity) {
      throw new NotFoundException('Entity does not exist!');
    }
    return entity;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.baseService.delete(id);
  }

}
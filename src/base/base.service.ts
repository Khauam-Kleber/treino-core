import { BadGatewayException, Injectable } from '@nestjs/common';
import { IBaseService } from '../base/IBase.service';
import { BaseEntity } from './base.entity';
import { Model } from 'mongoose';

@Injectable()
export class BaseService<T extends BaseEntity> implements IBaseService<T> {

	constructor(private readonly baseModule: Model<T>) { }

	async findAll(){
		try {
			return this.baseModule.find().exec();
		} catch (error) {
			throw new BadGatewayException(error);
		}
	}

	async get(id: number): Promise<T> {
		try {
			const customer = await this.baseModule.findById(id).exec();
			return customer;
		} catch (error) {
			throw new BadGatewayException(error);
		}
	}

	async update(entity: any) {
		const updatedCustomer = await this.baseModule.findByIdAndUpdate(entity._id, entity, { new: true });
		return updatedCustomer;
	}

	async delete(id: number) {
		try {
			const deletedCustomer = await this.baseModule.findByIdAndRemove(id);
			return deletedCustomer;
		} catch (error) {
			throw new BadGatewayException(error);
		}
	}

	async create(t: T): Promise<T> {
		try {
			const createdEntity = new this.baseModule(t);
			return createdEntity.save();
		}
		catch (error) {
			throw new BadGatewayException(error);
		}
	}

}
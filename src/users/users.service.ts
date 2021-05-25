import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { GraphQLError } from 'graphql/error/GraphQLError';
import { Model, Types } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<UserDocument>,
  ) { }

  async create(createUserInput: CreateUserInput) {
    try {
      const isUser = await this.UserModel.findOne({
        useremail: createUserInput.useremail,
      });
      if (isUser) {
        throw new GraphQLError('Email address already exists');
      } else {
        createUserInput.password = await bcrypt
          .hash(createUserInput.password, 10)
          .then((r) => r);
        return await new this.UserModel(createUserInput).save();
      }
    } catch (err) {
      console.error(err);
    }
  }

  async findAll() {
    try {
      return await this.UserModel.find().exec();
    } catch (err) {
      console.error(err);
    }
  }

  async findOne(_id: Types.ObjectId) {
    try {
      return await this.UserModel.findById(_id).exec();
    } catch (err) {
      console.error(err);
    }
  }
  
  async update(_id: string, updateUserInput: UpdateUserInput) {
    try {
      const isUser = await this.UserModel.findOne({
        useremail: updateUserInput.useremail,
      });
      if (isUser) {
        updateUserInput.password = await bcrypt
          .hash(updateUserInput.password, 10)
          .then((r) => r);
      } else {
        throw new GraphQLError('Email address already Error');
      }
      return await this.UserModel.findByIdAndUpdate(_id, updateUserInput, {
        new: true,
      }).exec();
    } catch(err) {
    console.error(err);
  }
}

async remove(_id: Types.ObjectId) {
  try {
    return await this.UserModel.findByIdAndDelete(_id).exec();
  } catch (err) {
    console.error(err);
  }
}
}

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from 'src/schemas/user.schema';
import { Types } from 'mongoose';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) { }

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    try {
      return await this.usersService.create(createUserInput);
    } catch (err) {
      console.error(err);
    }
  }
  
  @Query(() => [User], { name: 'users' })
  async findAll() {
    try {
      return await this.usersService.findAll();
    } catch (err) {
      console.error(err);
    }
  }

  @Query(() => User, { name: 'user' })
  async findOne(@Args('id', { type: () => String }) _id: Types.ObjectId) {
    try {
      return await this.usersService.findOne(_id);
    } catch (err) {
      console.error(err);
    }
  }
   
  @Mutation(() => User)
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    try{
      return await this.usersService.update(updateUserInput._id, updateUserInput);
    } catch (err) {
      console.error(err);
    }
  }
  
  @Mutation(() => User)
  async removeUser(@Args('id', { type: () => String }) _id: Types.ObjectId) {
    try {
      return await this.usersService.remove(_id);
    } catch (err) {
      console.error(err);
    }
  }
}

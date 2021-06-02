import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from 'src/schemas/user.schema';
import { Types } from 'mongoose';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-jwt.guard';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) { }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    try {
      return await this.usersService.create(createUserInput);
    } catch (err) {
      console.error(err);
    }
  }
  
  @Query(() => [User], { name: 'users' })
  @UseGuards(GqlAuthGuard)
  async findAll() {
    try {
      return await this.usersService.findAll();
    } catch (err) {
      console.error(err);
    }
  }

  @Query(() => User, { name: 'user' })
  @UseGuards(GqlAuthGuard)
  async findOne(@Args('id', { type: () => String }) _id: Types.ObjectId) {
    try {
      return await this.usersService.findOne(_id);
    } catch (err) {
      console.error(err);
    }
  }
   
  @Mutation(() => String)
  async login(
    @Args('useremail') useremail: string,
    @Args('password') password: string,
  ) {
    try {
      return await this.usersService.login({ useremail, password });
    } catch (err) {
      console.error(err);
    }
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    try{
      return await this.usersService.update(updateUserInput._id, updateUserInput);
    } catch (err) {
      console.error(err);
    }
  }
  
  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async removeUser(@Args('id', { type: () => String }) _id: Types.ObjectId) {
    try {
      return await this.usersService.remove(_id);
    } catch (err) {
      console.error(err);
    }
  }
}

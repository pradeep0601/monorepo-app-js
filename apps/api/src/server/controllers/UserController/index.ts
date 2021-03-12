import {Body, Get, JsonController, Param, Post} from 'routing-controllers';
import {Inject, Container} from 'typedi';
import { User } from '../../models/User';
import { UserService } from '../../services/UserService';


@JsonController('')
export class UserController {
    
    private userService: UserService = Container.get(UserService);
    
    @Get('/users')
    async getUsers(): Promise<User[]> {
        const users: User[] = await this.userService.getUsers();
        return users;
    }

    @Post('/users')
    async createUser(@Body() user: User): Promise<User> {
        const res: User = await this.userService.createUser(user);
        return res;
    }

    @Get('/users/:id')
    async getUserById(@Param('id') id: Number): Promise<User> {
        const data: User = await this.userService.getUserById(id);
        return data;
    }
}
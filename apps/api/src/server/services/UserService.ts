import { Service } from "typedi";
import { User } from "../models/User";
import axios from 'axios';

@Service()
export class UserService {
    
    async getUsers(): Promise<User[]> {
        const res: any = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users: User[] = res.data;
        console.log('====typeof users: ', typeof users);
        return users;
    };

    async createUser(user: User): Promise<User> {
        const res: any = await axios.post(
            'https://jsonplaceholder.typicode.com/users',
            user 
        )
        const {data} = res;
        return data;
    }

    async getUserById(id: Number): Promise<User> {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = res.data;
        const user: User = users.filter(user => user.id === id);
        return user;
    }
}
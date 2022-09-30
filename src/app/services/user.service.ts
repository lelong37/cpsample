import { User } from '../model/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    { id: '1', name: 'John', lastName: 'Doe', tags: ['angular', 'typescript'] },
    { id: '2', name: 'Simon', lastName: 'Doe', tags: ['javascript', 'rxjs'] },
    { id: '3', name: 'Thomas', lastName: 'Doe', tags: ['angular', 'promise'] },
    { id: '4', name: 'Paul', lastName: 'Doe', tags: ['angular', 'typescript'] },
    { id: '5', name: 'Peter', lastName: 'Doe', tags: ['angular', 'typescript'] },
    { id: '6', name: 'Mathew', lastName: 'Doe', tags: ['angular', 'typescript'] }
  ].map(e => new User(e.name, e.lastName, e.tags, e.id));

  get(): User[] {
    return [...this.users];
  }

  create(user: any) {
    user.id = `${this.users.length + 1}`;    
    this.users.push(user);
  }

  edit(user: any) {
    const index = this.users.findIndex(u => u.id === user.id);
    this.users[index].lastName = user.lastName;
    this.users[index].name = user.name;
  }

  delete(user: any) {
    const index = this.users.findIndex(u => u.id === user.id);
    this.users.splice(index, 1);
  }
}

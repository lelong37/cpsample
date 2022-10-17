import { User } from '../model/user';
import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { createUserForm, UserForm } from '../model/user-form';

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

  get(): FormArray<FormGroup<UserForm>> {
    return new FormArray<FormGroup<UserForm>>(this.users.map(u => createUserForm(u)));
  }

  create(user:User) {
    user.id = `${this.users.length + 1}`;    
    this.users.push(user as any);
  }

  edit(user: User) {
    const index = this.users.findIndex(u => u.id === user.id);
    this.users[index].lastName = user.lastName;
    this.users[index].name = user.name;
  }

  delete(user: User) {
    const index = this.users.findIndex(u => u.id === user.id);
    this.users.splice(index, 1);
  }
}

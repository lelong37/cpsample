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
  ];

  get() {
    return new FormArray<FormGroup<UserForm>>(
      this.users.map(u => createUserForm(u))
    );
  }

  create(user:User) {
  }

  edit(user: User) {
  }

  delete(user: User) {
  }
}

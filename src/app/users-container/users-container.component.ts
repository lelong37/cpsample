import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormArray, FormGroup } from '@angular/forms';
import { userForm, UserForm } from '../model/user-form';

@Component({
  selector: 'app-users',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.css']
})
export class UsersContainerComponent implements OnInit {
  users = new FormArray<FormGroup<UserForm>>([]);
  selectedUser: FormGroup<UserForm> | null = null;
  
  constructor(private data: UserService) { }

  ngOnInit() {
    this.users = new FormArray(this.data.get().map(u => userForm(u)));
  }

  selectUser(user: FormGroup<UserForm>) {
    this.selectedUser = user;
  }

  deleteUser(user: FormGroup<UserForm>){
    this.data.delete(user.value);
    this.users = new FormArray(this.data.get().map(u => userForm(u)));
    this.selectedUser = null;
  }

  create() {
    this.selectedUser = userForm();
  }

  save(user: FormGroup<UserForm>) {
    if (!user.valid) {
      return;
    }

    if (user.controls.id.value) {
      this.data.edit(user.value);
    } else {
      this.data.create(user.value);
    }

    this.users = new FormArray(this.data.get().map(u => userForm(u)));
    this.selectedUser = null;
  }

  get userFormArray() {
    return (this.users.controls as FormGroup<UserForm>[]);
  }
}
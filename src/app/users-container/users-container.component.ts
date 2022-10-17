import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormArray, FormGroup } from '@angular/forms';
import { createUserForm, UserForm } from '../model/user-form';

@Component({
  selector: 'app-users',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.css']
})
export class UsersContainerComponent implements OnInit {
  userForms = new FormArray<FormGroup<UserForm>>([]);
  selectedUserForm: FormGroup<UserForm> | null = null;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userForms = this.userService.get();
  }

  selectUser(userForm: FormGroup<UserForm>) {
    this.selectedUserForm = userForm;
  }

  deleteUser(userForm: FormGroup<UserForm>){
    this.userService.delete(userForm.getRawValue());
    this.userForms = this.userService.get();
    this.selectedUserForm = null;
  }

  create() {
    this.selectedUserForm = createUserForm();
  }

  save(userForm: FormGroup<UserForm>) {
    if (!userForm.valid) {
      return;
    }

    if (userForm.controls.id.value) {
      this.userService.edit(userForm.getRawValue());
    } else {
      this.userService.create(userForm.getRawValue());
    }

    this.userForms = this.userService.get();
    this.selectedUserForm = null;
  }

  get userFormArray() {
    return (this.userForms.controls as FormGroup<UserForm>[]);
  }
}
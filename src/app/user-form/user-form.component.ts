import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { createUserForm, UserForm } from '../model/user-form';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input() set userForm(form: FormGroup){
    this._userForm = form;
  }

  @Output() save = new EventEmitter<FormGroup<UserForm>>();
  
  protected _userForm: FormGroup<UserForm> = createUserForm();

  onSave() {
    this.save.emit(this.userForm);
  }
}

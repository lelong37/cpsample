import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserForm, userForm } from '../model/user-form';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input() form = userForm();
  @Output() save = new EventEmitter<FormGroup<UserForm>>();

  onSave() {
    this.save.emit(this.form);
  }
}

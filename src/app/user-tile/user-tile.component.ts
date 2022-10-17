import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserForm } from '../model/user-form';

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserTileComponent {
  _userForm: FormGroup<UserForm> | null = null;
  @Input() set userForm(form: FormGroup){
    this._userForm = form;
  }
  @Input() active: boolean = false;
  @Output() selected: EventEmitter<FormGroup<UserForm>> = new EventEmitter<FormGroup<UserForm>>();
  @Output() deleted: EventEmitter<FormGroup<UserForm>> = new EventEmitter<FormGroup<UserForm>>();

  select(userForm: FormGroup<UserForm> | null) {
    if(userForm) this.selected.emit(userForm);    
  }

  delete(userForm: FormGroup<UserForm> | null) {
    if(userForm) this.deleted.emit(userForm);
  }
}

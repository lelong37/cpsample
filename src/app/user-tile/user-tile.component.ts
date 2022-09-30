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
  @Input() user: FormGroup<UserForm> | null = null;
  @Input() active: boolean = false;
  @Output() selected: EventEmitter<FormGroup<UserForm>> = new EventEmitter<FormGroup<UserForm>>();
  @Output() deleted: EventEmitter<FormGroup<UserForm>> = new EventEmitter<FormGroup<UserForm>>();

  select(user: FormGroup<UserForm> | null) {
    if(user) this.selected.emit(user);    
  }

  delete(user: FormGroup<UserForm> | null) {
    if(user) this.deleted.emit(user);
  }
}

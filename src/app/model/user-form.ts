import { FormControl, FormGroup } from "@angular/forms";
import { User } from "./user";

export interface UserForm {
  id: FormControl<string | null>;
  name: FormControl<string | null>;
  lastName: FormControl<string | null>;
  tags: FormControl<string[]>;
}

export const createUserForm = (user: User = new User()) => {
  return new FormGroup<UserForm>({
    id: new  FormControl(user.id),
    name: new FormControl(user.name),
    lastName: new FormControl(user.lastName),
    tags: new FormControl<string[]>(user.tags, { nonNullable: true })
  });
}

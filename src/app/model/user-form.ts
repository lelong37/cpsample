import { FormControl, FormGroup } from "@angular/forms";
import { User } from "./user";

export interface UserForm {
  id: FormControl<string | null | undefined>;
  name: FormControl<string | null | undefined>;
  lastName: FormControl<string | null | undefined>;
  tags: FormControl<string[]>;
}

export const createUserForm = (user: User = new User()) =>
  new FormGroup<UserForm>({
    id: new FormControl(user.id),
    name: new FormControl(user.name),
    lastName: new FormControl(user.lastName),
    tags: new FormControl<string[]>(user.tags, { nonNullable: true })
  })

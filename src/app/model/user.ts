export class User {
  // get fullName(): string {
  //   return `${this.name} ${this.lastName}`;
  // }

  constructor(
    public name: string | null | undefined = '',
    public lastName: string | null | undefined = '',
    public tags: string[] = [],
    public id: string | null | undefined  = ''
  ) {}
}

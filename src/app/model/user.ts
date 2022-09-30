export class User {
  get fullName(): string {
    return `${this.name} ${this.lastName}`;
  }

  constructor(
    public name: string = '',
    public lastName: string = '',
    public tags: string[] = [],
    public id: string = ''
  ) {}
}

export class User {
  constructor(
    public name: string | null | undefined = '',
    public lastName: string | null | undefined = '',
    public tags: string[] = [],
    public id: string | null | undefined  = ''
  ) {}
}

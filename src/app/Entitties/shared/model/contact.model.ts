export interface IContact {
  nameSurname?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export class Contact implements IContact {
  constructor(
    public nameSurname?: string,
    public email?: string,
    public subject?: string,
    public message?: string
  ) {
    this.nameSurname = nameSurname;
    this.email = email;
    this.subject = subject;
    this.message = message;
  }
}

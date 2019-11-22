import * as moment from 'moment';

export class User {
  id: number;
  uid: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  birthday: Date;
  avatar?: string;

  constructor(id, uid, firstname, lastname, email, password, birthday, avatar) {
    this.id = id;
    this.uid = uid;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.birthday = new Date(moment(birthday).format());
    this.avatar = '/assets/avatars/' + avatar;
  }
}

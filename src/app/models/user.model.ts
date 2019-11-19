import * as moment from 'moment';

export class User {
  id: number;
  firstname: string;
  lastname: string;
  birthday: Date;
  avatar?: string;

  constructor(id, firstname, lastname, birthday, avatar) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = new Date(moment(birthday).format());
    this.avatar = '/assets/avatar/' + avatar + '.png';
  }

  get age() {
    return moment().diff(this.birthday, 'years');
  }
}

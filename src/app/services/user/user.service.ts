import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/user.model';
import {delay, flatMap, map} from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL: string;

  constructor(
    private http: HttpClient
  ) {
    this.URL = 'http://localhost:3000/';
  }

  getUsers(): Observable<User[]> {
    return this.http.get(this.URL + 'users').pipe(map((response) => response as User[]));
  }

  getUser(id: number): Observable<User> {
    return this.http.get(this.URL + 'users/' + id).pipe(map((response) => response as User));
  }

  getUserExists(name: string): Observable<boolean> {
    return this.http.get(this.URL + 'users?name=' + name).pipe(map((response: any[]) => (response.length !== 0)), delay(2000));
  }

  getMinUserId(): Observable<number> {
    return this.getUsers().pipe(map((users) => {
      return _.chain(users).map('id').min().value();
    }));
  }

  getMaxUserId(): Observable<number> {
    return this.getUsers().pipe(map((users) => {
      return _.chain(users).map('id').max().value();
    }));
  }

  createUser(user: User): Observable<User> {
    user.avatar = '/assets/avatars/' + user.avatar;
    return this.getMaxUserId().pipe(
      map((max) => {
        user.id = max + 1;
      }),
      flatMap(() => {
        return this.http.post(this.URL + 'users', user).pipe(map(((response) => response as User)));
      })
    );
  }

  updateUser(user: User): Observable<User> {
    return this.http.put(this.URL + 'users/' + user.id, user).pipe(map(((response) => response as User)));
  }

  deleteUser(user: User): Observable<User> {
    return this.http.delete(this.URL + 'users/' + user.id).pipe(map(((response) => response as User)));
  }
}

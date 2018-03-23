import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class UsersService {

  constructor() { }

  getUser() : Observable<User> {
      return null;
  }

}

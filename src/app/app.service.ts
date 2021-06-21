import { Injectable } from '@angular/core';
import { User } from './models';
import users from '../../conversation.json';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { 
  }

  public conversationJson: User[] = users;

}

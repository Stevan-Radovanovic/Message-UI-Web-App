import { Component } from '@angular/core';
import { AppService } from './app.service';
import { User } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'message-app';

  selectedUser = null;

  constructor(public serv: AppService) {}

  selectUser(user: User) {
    this.selectedUser = user;
    setTimeout(() => {
      var element = document.getElementById("id");
      element.scrollTop = element.scrollHeight;
    },0)

  }

  addMessage(value: string) {
    if(!value) return;
    this.selectedUser.messages.push({content: value, type: 'sent', time: new Date()});
    console.log(this.selectedUser);
    setTimeout(() => {
      var element = document.getElementById("id");
      element.scrollTop = element.scrollHeight;
    },0)
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  @Output() updated = new EventEmitter();
  title = 'binding-of-channel-points-client';
  registeredWithTwitch = false;
  code: string;
  user: User;

  constructor(
    private cookieService: CookieService,
  ) {
    this.code = this.cookieService.get('code');
    this.user = {displayname:this.cookieService.get('displayName'), profileimageurl: this.cookieService.get('profileImageURL'), userid: this.cookieService.get('userID') }
    this.user.displayname = this.cookieService.get('displayName');
    console.log(this.code);
    this.registeredWithTwitch = this.code !== '';
  }
  ngOnInit(): void {
    if (this.registeredWithTwitch) {
      console.log('get users');
    }
  }

  

}



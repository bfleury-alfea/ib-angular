import {Component, OnInit} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
  user: User;
  loading: boolean;

  constructor(
    private router: Router,
    private authService: AngularFireAuth
  ) {
  }

  ngOnInit(): void {
    this.title = 'Pizza Party Jelly Time';

    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log('AppComponent - ngOnInit - this.user');
      console.log(this.user);
    });

    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }
}

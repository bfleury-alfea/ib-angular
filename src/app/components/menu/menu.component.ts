import {Component, Input, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {MessagesService} from '../../services/messages/messages.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isCollapsed: boolean;
  @Input() title: string;

  constructor(
    private authService: AngularFireAuth,
    private router: Router,
    private messagesService: MessagesService,
  ) {
  }

  ngOnInit() {
    this.isCollapsed = false;
  }

  toggleCollapseNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  logout() {
    this.authService.auth.signOut().then((userC) => {
      this.messagesService.addMessage('Logged out', 'success');
      this.router.navigate(['/pizzas']);
    }).catch((error) => {
      console.error(error);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {MessagesService} from '../../services/messages/messages.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form-page',
  templateUrl: './login-form-page.component.html',
  styleUrls: ['./login-form-page.component.scss']
})
export class LoginFormPageComponent implements OnInit {
  loginForm: FormGroup

  constructor(
    private authService: AngularFireAuth,
    private messagesService: MessagesService,
    private router: Router,
    fb: FormBuilder
  ) {

    this.loginForm = fb.group({
      email: fb.control('', [Validators.required]),
      password: fb.control('', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  login() {
    this.authService.auth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password).then((userC) => {
      this.messagesService.addMessage('Logged in', 'success');
      this.router.navigate(['/pizzas']);
    }).catch((error) => {
      console.error(error);
    });
  }
}

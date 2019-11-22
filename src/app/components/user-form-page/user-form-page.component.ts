import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user/user.service';
import {userPasswordsMatch} from '../../validators/validators';

@Component({
  selector: 'app-user-form-page',
  templateUrl: './user-form-page.component.html',
  styleUrls: ['./user-form-page.component.scss']
})
export class UserFormPageComponent implements OnInit {
  userForm: FormGroup;
  passwordForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    fb: FormBuilder
  ) {
    this.userForm = fb.group({
      firstname: fb.control('', [Validators.required, Validators.minLength(3)]),
      lastname: fb.control('', [Validators.required, Validators.minLength(3)]),
      email: fb.control('', [Validators.required]),
      birthday: fb.control('', []),
      avatar: fb.control('', []),
    });

    this.passwordForm = fb.group({
      password: fb.control('', Validators.required),
      confirm_password: fb.control('', Validators.required)
    }, {validators: userPasswordsMatch()});
  }

  ngOnInit() {
  }

  save() {
    this.userForm.value.password = this.passwordForm.value.password;

    this.userService.createUser(this.userForm.value).subscribe((user) => {
      this.router.navigate(['/users']);
    });
  }
}

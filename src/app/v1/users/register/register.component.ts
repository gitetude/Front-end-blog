import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RegisterPayload} from '../../register-payload';
import {UsersService} from '../../../v1/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm: FormGroup;
  registerPayload: RegisterPayload;

  constructor(private formBuilder: FormBuilder,private authService: UsersService, private router:Router) {
    this.registerForm = this.formBuilder.group({
      username: '',
      firstname: '',
      lastname: '',
      password: '',
      confirmPassword: ''
    });

}


ngOnInit() {
}

onSubmit() {
  this.registerPayload.username = this.registerForm.get('username').value;
  this.registerPayload.firstname = this.registerForm.get('firstname').value;
  this.registerPayload.lastname = this.registerForm.get('lastname').value;
  this.registerPayload.password = this.registerForm.get('password').value;
  this.registerPayload.confirmPassword = this.registerForm.get('confirmPassword').value;
  this.authService.register(this.registerPayload).subscribe(data => {
    console.log('register succes');
    this.router.navigateByUrl('/register-success');
  }, error => {
    console.log('register failed');
  });

}

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;

  constructor(
    private authService : AuthService,
    private router : Router
  ) {
    this.registerForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.initFormLayout();
  }

  initFormLayout() {
    this.registerForm = new FormGroup(
      {
        emailForm : new FormControl('', [Validators.required, Validators.email]),
        firstNameForm : new FormControl(''),
        lastNameForm : new FormControl(''),
        pseudoForm : new FormControl('', Validators.required),
        passwordForm : new FormControl('', [Validators.required, Validators.minLength(8)])
      }
    );
  }

  onClickSubmit() {
    const formValues = this.registerForm.value;
    console.log(formValues)
    this.authService.register(
      formValues ['emailForm'],
      formValues ['firstNameForm'],
      formValues ['lastNameForm'],
      formValues ['pseudoForm'],
      formValues ['passwordForm']
    ).subscribe(
      (response: any) => {
        console.log('Account successfully created!');
        this.router.navigate(['/account/login']);
      }
    )
  }

}

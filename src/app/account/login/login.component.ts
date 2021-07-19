import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //loginForm : FormGroup;

  constructor(
    private router : Router,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
   /* this.initFormLayout();
    console.log("hello");*/
  }
/*
  initFormLayout(){
    this.loginForm = new FormGroup(
      {
        credentials : new FormControl ('', Validators.required),
        pwd : new FormControl ('', [Validators.required, Validators.minLength(8)])
      }
    )
  }

  onClickSubmit() {
    const formValues = this.loginForm.value;
    console.log(formValues);
    this.authService.login(
      formValues ['credentials'],
      formValues ['pwd']
    ).subscribe(
      (response: any) => {
        console.log('You are logged in!');
        this.router.navigate(['/account/home']);
      }
    )
  }


}
*/

onClickSubmit(form: NgForm) {
  console.log(form.value);
  this.authService.login(form.value.email, form.value.password).subscribe(
    (resp: any) => {
      console.log("Connection succeed", resp);
      this.router.navigate(['/home']);
    },
    error => {
      console.log('error while');
    }
    
  )
}

}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });

  user:any;

  constructor(private fb: FormBuilder,private router: Router ) {}

  onSubmit(){


   

   this.user=this.loginForm.getRawValue();
   
    if(this.user.email === "abna@gmail.com" && this.user.password === "1234"){
      this.router.navigate(['admin']);
  
    };
    if(this.user.email === "nibin@gmail.com" && this.user.password === "1234"){
      this.router.navigate(['address']);
  
    };
   

  }
  

  ngOnInit(): void {
  
}
}

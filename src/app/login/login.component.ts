import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any =  FormGroup;
  submitted = false;
  loginData = {
    userName: "",
    password: ""
  }
  constructor(private formBuilder: FormBuilder, private dataService: DataserviceService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user_name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

  }
  get form() { return this.loginForm.controls; }
  onSubmit(event:any){
    if(event.submitter.name = "Submit"){
      this.userLogin()
    }
  }
  userLogin(){
    this.submitted = true
    if(this.loginForm.invalid){
      return
    }
    console.log(this.loginForm)
    this.loginData.userName = this.loginForm.value.user_name;
    this.loginData.password = this.loginForm.value.password;
    console.log(this.loginData)
    // this.dataService.addLoginData(this.loginData)?.subscribe(error=> console.log('something went wrong'));
    // alert('data')
  }
}

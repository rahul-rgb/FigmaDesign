import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:any =  FormGroup;
  submitted = false;
  signupData = {
    name: "",
    email: "",
    user_name: "",
    mobile: "",
    password: ""
  }
  constructor(private formBuilder: FormBuilder, private dataService: DataserviceService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      user_name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]]
    }) 
  }
  get form() { return this.signupForm.controls; }
  onSubmit(event:any){
    if(event.submitter.name = "Submit"){
      this.userSignup()
    }
  }
  userSignup(){
    this.submitted = true
    if(this.signupForm.invalid){
      return
    }
    console.log(this.signupForm)
    this.signupData.user_name = this.signupForm.value.user_name;
    this.signupData.password = this.signupForm.value.password;
    this.signupData.name = this.signupForm.value.name;
    this.signupData.email = this.signupForm.value.email;
    this.signupData.mobile = this.signupForm.value.mobile;
    console.log(this.signupData)
    // this.dataService.addSignupData(this.loginData)?.subscribe(error=> console.log('something went wrong'));
    // alert('data')
  }
}

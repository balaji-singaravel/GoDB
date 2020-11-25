import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,

  ) { }
  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(this.emailPattern)]],
      mobile: [null, Validators.required],
      gender: [null, Validators.required],
      address: [null,Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(8)]],
      file: [null]
    }, {
      validators: this.password.bind(this)
    });
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  get f() { return this.registerForm.controls; }


  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.log(this.registerForm.value)
      let dataList =   localStorage.getItem("data");
      if(dataList == null || dataList == undefined){
        let data = [this.registerForm.value];
        localStorage.setItem("data", JSON.stringify(data));
      }else{
        let list = JSON.parse(dataList);
        list.push(this.registerForm.value);
        localStorage.setItem("data", JSON.stringify(list));
      }
      this.router.navigate(['/Login']);
    }
  }
}

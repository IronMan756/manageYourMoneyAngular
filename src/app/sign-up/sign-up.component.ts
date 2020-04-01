import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AbstractForm } from '../shared/form-helper';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent extends AbstractForm implements OnInit {
  constructor(
    private fb: FormBuilder
  ) {
    super()
   }

  public form: FormGroup;
  ngOnInit(): void {
    this.form = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        cpassword: ['', [Validators.required]],
        login: ['', [Validators.minLength(4)]]
      },{}
    )
  }
  public signUp(){
    if( this.form.valid){
      console.log(this.form.value)
    }
  }
}

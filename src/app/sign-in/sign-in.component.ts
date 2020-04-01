import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AbstractForm } from '../shared/form-helper';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent extends AbstractForm implements OnInit  {
  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
  ){ super()  
   }

  public ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  public signin(){
    if( this.form.valid){
    console.log(this.form.value)
    }
  }
}

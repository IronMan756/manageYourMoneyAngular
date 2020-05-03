import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AbstractForm } from '../../shared/services/form-helper';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent extends AbstractForm implements OnInit  {
  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ){
    super();
   }

  public ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  public signin(){
    if ( this.form.valid){
    console.log(this.form.value);
    this.authService.signIn(this.form.value).subscribe( i => console.log(i));
    }
  }
}

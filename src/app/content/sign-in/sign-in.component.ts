import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AbstractForm } from '../../shared/services/form-helper';
import { AuthService } from '../../shared/services/auth.service';
import { Store } from '@ngrx/store';
import { signInPending } from '../../store/actions/auth.actions';
import { go } from '../../store/actions/router.actions';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent extends AbstractForm implements OnInit  {
  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private store: Store,
  ){
    super();
   }
  // it works
  public ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  public signin(){
    if ( this.form.valid){
      const formValue: any = {
        email: this.getField('email').value,
        password: this.getField('password').value
      }
      this.store.dispatch(signInPending(formValue));
    }
  }
}

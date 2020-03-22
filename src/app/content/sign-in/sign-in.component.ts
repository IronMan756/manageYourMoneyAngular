// import { signIn } from './../../store/actions/auth.action';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AbstractForm } from '../../shared/services/form-helper';

// import { IStore } from 'src/app/store/reducers';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass'],
})
export class SignInComponent extends AbstractForm implements OnInit {
  public constructor(private fb: FormBuilder,
    //  private store: Store<IStore>
     ) {
    super();
  }
  public user$: Observable<any>;

  public ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public signin(): void {
    console.log({
          email: this.getField('email').value,
          password: this.getField('password').value,
        })
    // this.store.dispatch(
    //   signIn({
    //     email: this.getField('email').value,
    //     password: this.getField('password').value,
    //   }),
    // );
  }
}

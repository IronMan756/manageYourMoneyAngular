import { getExpencesPending, createExpencePending, deleteExpencePending } from './../../store/actions/expences.actions';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AbstractForm } from '../../shared/services/form-helper';
import { Store } from '@ngrx/store';
import { signInPending } from '../../store/actions/auth.actions';
import { go } from '../../store/actions/router.actions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent extends AbstractForm implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder, private store: Store) {
    super();
  }
  // it works
  public ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  public clic() {
    console.log('Expences');
    const expence = {
      userId: '12345',
      purseId: 'purse3',
      suma: 4000,
      data: '2020-06-28T15:47:32.179Z',
      name: 'Картинг',
      description: '',
    };
    this.store.dispatch(deleteExpencePending({expenceId: 'fghjlvxb izkjdzkyv8548512541258'}));
  }
  public signin() {
    if (this.form.valid) {
      this.store.dispatch(signInPending(this.form.value));
    }
  }
}

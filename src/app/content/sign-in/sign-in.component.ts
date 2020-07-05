import { IPurses } from './../../store/reducers/purses.reducer';
import { IIncomes } from './../../store/reducers/incomes.reducer';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AbstractForm } from '../../shared/services/form-helper';
import { Store } from '@ngrx/store';
import { signInPending } from '../../store/actions/auth.actions';
import { go } from '../../store/actions/router.actions';
import { createIncomePending, removeIncomePending } from '../../store/actions/incomes.actions';
import { getPursesPending, createPursePending, removePursePending } from '../../store/actions/purses.actions';
import { getCategoriesPending } from '../../store/actions/categories.actions';

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
   
    this.store.dispatch(getCategoriesPending());
  }
  public signin() {
    if (this.form.valid) {
      this.store.dispatch(signInPending(this.form.value));
    }
  }
}

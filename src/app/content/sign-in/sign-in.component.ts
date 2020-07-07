import { removeTransactionPending } from './../../store/actions/transactions.actions';
import { removeCategoryPending } from './../../store/actions/categories.actions';
import { IPurses } from './../../store/reducers/purses.reducer';
import { IIncomes } from './../../store/reducers/incomes.reducer';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AbstractForm } from '../../shared/services/form-helper';
import { Store } from '@ngrx/store';
import { signInPending } from '../../store/actions/auth.actions';
import { go } from '../../store/actions/router.actions';
import {
  createIncomePending,
  removeIncomePending,
} from '../../store/actions/incomes.actions';
import {
  getPursesPending,
  createPursePending,
  removePursePending,
} from '../../store/actions/purses.actions';
import {
  createCategoryPending,
  getCategoriesPending,
} from '../../store/actions/categories.actions';
import { getTransactionsPending, createTransactionPending } from '../../store/actions/transactions.actions';
import { ITransaction } from '../../store/reducers/transactions.reducer';

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
  public async clic() {
    const transaction: ITransaction = {
      userId: '123456',
      purseIdTo: '123456',
      purseIdFrom: '123456',
      incomeId: '123456',
      expenceId: '123456',
      suma: 500,
      // data: Date;
      name: 'testTransaction',
      description: 'test transaction',
      categoryId: '123456789'
    };
    // await this.store.dispatch(createCategoryPending({ category }));
    // await this.store.dispatch(getCategoriesPending());
    // await this.store.dispatch(removeCategoryPending({categoryId: '5f01d81a1e4b50004b64f8d3'}));
    // this.store.dispatch(createTransactionPending({transaction}));
    // this.store.dispatch(getTransactionsPending());
    this.store.dispatch(removeTransactionPending({transactionId: '5f01fb67ff5757006d965cba'}))
  }
  public signin() {
    if (this.form.valid) {
      this.store.dispatch(signInPending(this.form.value));
    }
  }
}

import { IPurses } from './../../store/reducers/purses.reducer';
import { IIncomes } from './../../store/reducers/incomes.reducer';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AbstractForm } from '../../shared/services/form-helper';
import { Store } from '@ngrx/store';
import { signInPending } from '../../store/actions/auth.actions';
import { go } from '../../store/actions/router.actions';
import { createIncomePending, removeIncomePending } from '../../store/actions/incomes.actions';
import { getPursesPending, createPursePending } from '../../store/actions/purses.actions';

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
    const payload: IPurses = {
        name: 'Д.С.',
        balance: 20500
    };
    const QueryIncomes = {
      userId: '5198645',
      purseId: '/98654189',
      suma: 2000,
      data: 547986,
      name: 'fghjkllkjb',
      _id: 'dclnjk',
    };
    const qury = {
      userId: 'fyghjk',
      purseId: 'iyuihjlk86541',
      suma: 8415154165,
      data: Date,
      name: 'ghjbnmklhlighbj',
      description: 'fghjk',
      _id: 'yguhkjl',
    };
    this.store.dispatch(createPursePending({payload}));
  }
  public signin() {
    if (this.form.valid) {
      this.store.dispatch(signInPending(this.form.value));
    }
  }
}

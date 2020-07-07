import { TransactionsEffects } from './transactionsEffects';
import { AuthEffects } from './auth.effect';
import { ExpencesEffects } from './expences.effects';
import { IncomesEffects } from './incomes.effect';
import { PursesEffects } from './purses.effects';
import { CategoriesEffects } from './categories.effects';


export const effects = [
    AuthEffects,
    ExpencesEffects,
    IncomesEffects,
    PursesEffects,
    CategoriesEffects,
    TransactionsEffects
];

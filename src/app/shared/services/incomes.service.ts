import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IIncomes } from '../../store/reducers/incomes.reducer';
import { Observable } from 'rxjs';

@Injectable()
export class IncomesService {
  constructor(public http: HttpClient) {}
  public getIncomes(): Observable<any> {
    // const { userId, purseId, suma, data, name, _id } = payload;

    return this.http.get('/incomes');
  }
  public createIncome(payload: IIncomes): Observable<any>{
      return this.http.post('/incomes', payload);
  }
  public removeIncome( incomeId: string): Observable<any>{
    return this.http.delete(`/incomes?id=${incomeId}`);
  }
}

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITransaction } from '../../store/reducers/transactions.reducer';

@Injectable()
export class TransactionsService{
    constructor(
        private http: HttpClient
    ){}
    public getTransactions(): Observable<any>{
        return this.http.get('/transactions') ;
    };
    public creatTransaction( transaction: ITransaction): Observable<any>{
        return this.http.post('/transactions', transaction);
    };
    public removeTransction( transactionId: string): Observable<any>{
        return this.http.delete(`/tarnsaction?id=${transactionId}`);
    }
}

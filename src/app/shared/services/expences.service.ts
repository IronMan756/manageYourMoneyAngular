import { IExpences } from './../../store/reducers/expences.reducer';
import { Observable } from 'rxjs';
import { getExpencesError } from './../../store/actions/expences.actions';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ExpencesService{
    constructor(
        public http: HttpClient
    ){}
    public getExpences(): Observable<any>{
        console.log('expences service')
        return this.http.get('/expences');
    }
    public createExpence(expence: IExpences): Observable<any>{
        console.log(expence)
        return this.http.post('/expences', expence);
    }
    public remove( expenceId: string){
        return this.http.delete(`/expences?id=${expenceId}`) ;
    }
}

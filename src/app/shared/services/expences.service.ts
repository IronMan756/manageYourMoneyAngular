import { IExpences } from './../../store/reducers/expences.reducer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ExpencesService{
    constructor(
        public http: HttpClient
    ){}
    public getExpences(): Observable<any>{
        return this.http.get('/expences');
    }
    public createExpence(expence: IExpences): Observable<any>{
        return this.http.post('/expences', expence);
    }
    public remove( expenceId: string){
        return this.http.delete(`/expences?id=${expenceId}`) ;
    }
}

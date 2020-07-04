import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { IPurses } from '../../store/reducers/purses.reducer';

@Injectable()
export class PursesService{
    constructor(
        public http: HttpClient
    ){}
    public getPurses(): Observable<any>{
        return this.http.get('/purses');
    }
    public createPurse(payload: IPurses): Observable<any>{
        console.log('payload',payload)
        return this.http.post('/purses', payload);
    }
    public removePurse(purseId: string): Observable<any>{
        console.log('purseId :',purseId)
        return this.http.delete(`/purses?id=${purseId}`);
    }
}

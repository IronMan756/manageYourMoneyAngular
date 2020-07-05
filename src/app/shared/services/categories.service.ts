import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICategories } from '../../store/reducers/categories.reducer';
import { Injectable } from '@angular/core';



@Injectable()
export class CategoriesService{
    constructor(
        private http: HttpClient
    ){}
    public getCategories(): Observable<any>{
        return this.http.get('/categories');
    }
    public createCategory(category: ICategories): Observable<any>{
        return this.http.post('/categories', category);
    }
    public removeCategory(categoryId: string): Observable<any>{
        return this.http.delete(`/category?id=${categoryId}`);
    }
}

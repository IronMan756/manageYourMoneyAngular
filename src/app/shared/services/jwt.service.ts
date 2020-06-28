import { Injectable } from "@angular/core";

@Injectable()
export class JwtService{
    public createToken(token: string){
        return localStorage.setItem('Token', token);
        //  .getItem('token');
    }
}

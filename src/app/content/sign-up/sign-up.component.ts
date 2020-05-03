import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AbstractForm } from '../../shared/services/form-helper';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent extends AbstractForm implements OnInit {
  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public http: HttpClient
  ) {
    super();
   }

  public form: FormGroup;
  ngOnInit(): void {
    this.form = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        cpassword: ['', [Validators.required]],
        login: ['', [Validators.minLength(4)]]
      }, {}
    );
  }
  public signUp(){
    if ( this.form.valid){
      const formValue = {
        login: this.getField('login').value,
        email: this.getField('email').value,
        password: this.getField('cpassword').value
      };
      this.authService.signUp( formValue ).subscribe(i => console.log(i));
    }
  }
}

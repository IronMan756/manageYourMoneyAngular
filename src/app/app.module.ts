import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store, StoreModule } from '@ngrx/store';
import { checkLogin } from './store/actions/auth.actions';
import { reducers, CustomRouterSerializer } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { SharedModule } from './shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';

import { AuthGuard } from './shared/services/auth.quard';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomRouterSerializer,
    }),
    SharedModule.forRoot(),
    EffectsModule.forRoot(effects)
  ],
  providers: [ AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function initApp(store: Store<any>
  // It should make interface IStore
  ) {
  return () => store.dispatch(checkLogin());
}
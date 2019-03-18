import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { sharedModule } from './shared/shared.module';
import { shoppingModule } from './shopping-list/shopping.module';
import { authModule } from './auth/auth.module';
import { coreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    sharedModule,
    shoppingModule,
    authModule,
    AppRoutingModule,
    coreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

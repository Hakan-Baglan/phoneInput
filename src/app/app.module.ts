import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IMaskModule } from 'angular-imask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneComponent } from './phone/phone.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IMaskModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxIntlTelInputModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

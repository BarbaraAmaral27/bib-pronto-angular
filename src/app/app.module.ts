import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadernoCreateComponent } from './components/caderno/create/caderno-create.component';
import { CadernoIndexComponent } from './components/caderno/index/caderno-index.component';
import { CadernoEditComponent } from './components/caderno/edit/caderno-edit.component';
import { DoceIndexComponent } from './components/doce/index/doce-index.component';
import { DoceCreateComponent } from './components/doce/create/doce-create.component';
import { DoceEditComponent } from './components/doce/edit/doce-edit.component';
import { GibiIndexComponent } from './components/gibi/index/gibi-index.component';
import { GibiCreateComponent } from './components/gibi/create/gibi-create.component';
import { GibiEditComponent } from './components/gibi/edit/gibi-edit.component';
//import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    CadernoCreateComponent,
    CadernoIndexComponent,
    CadernoEditComponent,
    DoceIndexComponent,
    DoceCreateComponent,
    DoceEditComponent,
    GibiIndexComponent,
    GibiCreateComponent,
    GibiEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

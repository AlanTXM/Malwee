import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, Validators} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgIfNgForComponent } from './ng-if-ng-for/ng-if-ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfNgForComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

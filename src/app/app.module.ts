import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {GitService} from './services/git-service.service';
import { AppComponent } from './app.component';
import { ShowWsComponent } from './components/show-ws/show-ws.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowWsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }

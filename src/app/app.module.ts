import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { GithubcommitsComponent } from './githubcommits/githubcommits.component';
import { GithubcommitdetailComponent } from './githubcommitdetail/githubcommitdetail.component';
import { AppComponent } from './app.component';
import { GithubcommitsService } from './githubcommits/githubcommits.service';
import { GitcommitdetailService } from './githubcommitdetail/gitcommitdetail.service';

import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    GithubcommitsComponent,
    GithubcommitdetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    routing
  ],
  providers: [GithubcommitsService, GitcommitdetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }

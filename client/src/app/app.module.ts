import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import { MaterialModule } from './module/material-module';

import { GitHubService } from './service/github.service';
import { GitHubRepositoryComponent } from './component/githubrepository/githubrepository.component';
import { GitHubUserComponent } from './component/githubuser/githubuser.component';

@NgModule({
  declarations: [
    AppComponent,
    GitHubRepositoryComponent,
    GitHubUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [GitHubService],
  bootstrap: [AppComponent],
})
export class AppModule { }

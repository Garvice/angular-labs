import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { UpVoteComponent } from './up-vote/up-vote.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  { path: 'joke-list', component: JokeListComponent },
  { path: 'joke', component: JokeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    UpVoteComponent,
    JokeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

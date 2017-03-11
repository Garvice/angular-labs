import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { JokeDetailComponent } from './joke/joke-detail/joke-detail.component';
import { UpVoteComponent } from './up-vote/up-vote.component';
import { JokeListComponent } from './joke/joke-list/joke-list.component';
import {RouterModule, Routes} from "@angular/router";
import {JokeService} from "./services/joke.service";

const appRoutes: Routes = [
  { path: 'jokes', component: JokeListComponent },
  { path: 'jokes/:jokeId', component: JokeDetailComponent },
  {path: '', pathMatch: 'full', redirectTo: 'jokes'},
];

@NgModule({
  declarations: [
    AppComponent,
    JokeDetailComponent,
    UpVoteComponent,
    JokeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

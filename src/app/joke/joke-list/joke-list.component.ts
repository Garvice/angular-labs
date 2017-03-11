import {Component, OnInit} from "@angular/core";
import {Joke} from "../models/joke.model";
import {Router} from "@angular/router";
import {JokeService} from "../../services/joke.service";
import {Observable} from "rxjs";

@Component({
    selector: 'joke-list',
    templateUrl: 'joke-list.component.html',
    styleUrls: ['joke-list.component.css']
})
export class JokeListComponent implements OnInit {
    private jokes: Observable<Array<Joke>>;

    constructor(private router: Router, private jokeService: JokeService) {
    }

    ngOnInit() {
        this.jokes = this.jokeService.getJokes()
    }

    showJoke(joke: Joke):void {
        this.router.navigateByUrl(`/jokes/${joke.id}`);
    }
}

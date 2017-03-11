import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {JokeService} from "../../services/joke.service";
import {Joke} from "../models/joke.model";

@Component({
    selector: 'joke-detail',
    templateUrl: 'joke-detail.component.html',
    styleUrls: ['joke-detail.component.css']
})
export class JokeDetailComponent implements OnInit {
    private jokeId: any;
    private joke: Joke;
    private lolCount: number = 0;
    private groanCount: number = 0;
    private setup: string = '';
    private punchline: string = '';

    constructor(private route: ActivatedRoute, private jokeService: JokeService) {
    }

    incrementGroan(): void {
        this.groanCount++;
        this.joke.addGroan();
        this.jokeService.saveJoke(this.joke)
            .subscribe(joke => {
                this.joke = joke;
                this.punchline = joke.punchline;
                this.setup = joke.setup;
                this.lolCount = joke.lolCount();
                this.groanCount = joke.groanCount();
            });
    }

    incrementLol(): void {
        this.lolCount++;
        this.joke.addLol();
        this.jokeService.saveJoke(this.joke)
            .subscribe(joke => {
                this.joke = joke;
                this.punchline = joke.punchline;
                this.setup = joke.setup;
                this.lolCount = joke.lolCount();
                this.groanCount = joke.groanCount();
            });
    }

    ngOnInit() {
        this.jokeId = this.route.snapshot.params['jokeId'];
        this.jokeService.getJoke(this.jokeId)
            .subscribe(joke => {
                this.joke = joke;
                this.punchline = joke.punchline;
                this.setup = joke.setup;
                this.lolCount = joke.lolCount();
                this.groanCount = joke.groanCount();
            });
    }
}
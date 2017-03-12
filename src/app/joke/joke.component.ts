import {Component, OnInit} from "@angular/core";
import {Joke} from "../models/joke.model";


@Component({
    selector: 'joke',
    templateUrl: './joke.component.html',
    styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
    private joke: Joke;
    private setup: string;
    private punchline: string;
    private lols: number;
    private groans: number;

    constructor() {
        this.joke = Joke.getJoke;
        this.punchline = this.joke.punchline;
        this.setup = this.joke.setup;
        this.lols = this.joke.lolCount();
        this.groans = this.joke.groanCount();

    }

    ngOnInit() {
    }

}

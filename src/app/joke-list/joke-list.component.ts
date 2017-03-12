import {Component, OnInit} from "@angular/core";
import {Joke} from "../models/joke.model";
import {NavigationExtras, Router} from "@angular/router";

const JOKES: Array<Joke> =
    [
        new Joke("Why did the chicken cross the road?","To get to the other side", 3, 9),
        new Joke("Why was the ocean embarrassed?","Cause all the fish could see it’s bottom", 4, 6),
        new Joke("Did you hear about the butcher who backed up into the meat grinder?","He got a little behind in his work.", 63, 9),
        new Joke("Why don’t oysters share their pearls","They’re shellfish!!", 8, 12),
    ];


@Component({
    selector: 'app-joke-list',
    templateUrl: 'joke-list.component.html',
    styleUrls: ['joke-list.component.css']
})
export class JokeListComponent implements OnInit {
    private jokes: Array<Joke> = JOKES;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    showJoke(joke: Joke):void {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "setup": joke.setup,
                "punchline": joke.punchline,
                "lols": joke.lolCount(),
                "groans": joke.groanCount()

            }
        };
        this.router.navigate(["joke"], navigationExtras);
    }
}

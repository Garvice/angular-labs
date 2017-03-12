import {Vote} from "./vote.model";

const CLASSIC_CHICKEN_JOKE = new Joke("Why did the chicken cross the road?", "To get to the other side", 3, 9);

/**
 * Provides the ability to create a joke with a setup and punchline.
 * Tracks the total lols and groans the joke received over time.
 */
export class Joke {
    private groanVotes: Vote = new Vote(0);
    private lolsVotes: Vote = new Vote(0);

    public static getJoke = CLASSIC_CHICKEN_JOKE;

    constructor(public setup: string, public punchline: string, lols?: number, groans?: number){
        if (lols) {
            this.lolsVotes = new Vote(lols);
        }

        if (groans) {
            this.groanVotes = new Vote(groans);
        }
    }

    groans(): number {
        return this.groanVotes.voteCount();
    }

    addGroan(): void {
        this.groanVotes.increment();
    }

    lols(): number {
        return this.lolsVotes.voteCount();
    }

    addLol(): void{
        this.lolsVotes.increment();
    }
}

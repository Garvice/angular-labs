import {Vote} from "./vote";

/**
 * Provides the ability to create a joke with a setup and punchline.
 * Tracks the total lols and groans the joke received over time.
 */
export class Joke {
    private groanVotes: Vote = new Vote(0);
    private lolsVotes: Vote = new Vote(0);

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

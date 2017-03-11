import {Vote} from "./vote.model";
/**
 * Provides the ability to create a JOKE with a setup and punchline.
 * Tracks the total lols and groans the JOKE received over time.
 */
export class Joke {
    private groanVotes: Vote = new Vote(0);
    private lolVotes: Vote = new Vote(0);

    constructor(public id: number, public setup: string, public punchline: string, public categories: Array<string>,
                private lols?: number, private groans?: number){
        if (lols) {
            this.lolVotes = new Vote(lols);
        }

        if (groans) {
            this.groanVotes = new Vote(groans);
        }
    }

    groanCount(): number {
        return this.groanVotes.voteCount();
    }

    addGroan(): void {
        this.groanVotes.increment();
    }

    lolCount():number {
        return this.lolVotes.voteCount();
    }

    addLol(): void{
        this.lolVotes.increment();
    }
}

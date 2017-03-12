import {Vote} from "./vote.model";

const CLASSIC_CHICKEN_JOKE = {
    "setup": "Why did the chicken cross the road?",
    "punchline": "To get to the other side",
    "groanVotes": {"votes": 9},
    "lolsVotes": {"votes": 3}
};

/**
 * Provides the ability to create a JOKE with a setup and punchline.
 * Tracks the total lols and groans the JOKE received over time.
 */
export class Joke {
    private groanVotes: Vote = new Vote(0);
    private lolsVotes: Vote = new Vote(0);

    public static getJoke: any = CLASSIC_CHICKEN_JOKE;

    constructor(public setup: string, public punchline: string, lols?: number, groans?: number) {
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

    addLol(): void {
        this.lolsVotes.increment();
    }
}

/**
 * Provides the ability to create a JOKE with a setup and punchline.
 * Tracks the total lols and groans the JOKE received over time.
 */
export class Joke {
    private groanVotes: Vote = new Vote(0);
    private lolVotes: Vote = new Vote(0);

    constructor(public id: number, public setup: string, public punchline: string, public categories: Array<string>,
                private lols?: number, private groans?: number) {
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

    lolCount(): number {
        return this.lolVotes.voteCount();
    }

    addLol(): void {
        this
    }
}


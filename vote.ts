/**
 * Mechanism to allow voting, providing the ability to up-vote and down-vote
 */
export class Vote {
    constructor(private votes: number){}

    increment() {
        this.votes++;
    }

    decrement() {
        this.votes--;
    }

    voteCount(): number {
        return this.votes;
    }
}
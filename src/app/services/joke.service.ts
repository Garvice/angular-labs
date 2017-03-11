import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";
import {Joke} from "../joke/models/joke.model";

const baseUrl = 'http://localhost:3000/api';

@Injectable()
export class JokeService {
    private jokesUrl = `${ baseUrl }/jokes`;

    constructor(private http: Http) {
    }

    getJokes(): Observable<Array<Joke>> {
        return this.http.get(this.jokesUrl)
            .map(this.extractData)
            .map(this.fromJsonArray, this)
            .catch(this.handleError);
    }

    getJoke(jokeId: number): Observable<Joke> {
        return this.http.get(`${this.jokesUrl}/${jokeId}`)
            .map(this.extractData)
            .map(this.fromJson)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private fromJsonArray(jokeData: any): Array<Joke> {
        return jokeData.map(this.fromJson);
    }

    private fromJson(joke: any): Joke {
        return new Joke(joke.id, joke.Setup, joke.Punchline, joke.LOLCount, joke.GroanCount);
    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
import {Component, OnInit, Input} from "@angular/core";
import {Joke} from "../../../joke";

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  private setup: string;
  private punchline: string;
  private lols: number;
  private groans: number;

  @Input() joke: Joke;

  constructor() {
  }

  incrementGroan(): void {
    this.groans++;
  }

  incrementLol(): void {
    this.lols++;
  }

  ngOnInit() {
    this.setup = this.joke.setup;
    this.punchline = this.joke.punchline;
    this.lols = this.joke.lolCount();
    this.groans = this.joke.groanCount();
  }

}

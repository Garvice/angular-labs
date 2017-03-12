import {Component, OnInit, Input} from "@angular/core";
import {Joke} from "../models/joke.model";
import {ActivatedRoute} from "@angular/router";

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

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.setup = params["setup"];
      this.punchline = params["punchline"];
      this.lols = params["lols"];
      this.groans = params["groans"];
    });
  }

  incrementGroan(): void {
    this.groans++;
  }

  incrementLol(): void {
    this.lols++;
  }

  ngOnInit() {
  }

}

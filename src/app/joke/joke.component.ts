import {Component, OnInit} from "@angular/core";
import {Joke} from "../models/joke.model";


@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  private joke: Joke;

  constructor() {
    this.joke = Joke.getJoke;
    console.log(JSON.stringify(this.joke));
  }

  ngOnInit() {
  }

}

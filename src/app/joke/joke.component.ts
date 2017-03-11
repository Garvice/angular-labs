import {Component, OnInit} from "@angular/core";
import {Joke} from "../../../joke";

const JOKE = new Joke("Why did the chicken cross the road?", "To get to the other side", 3, 9);

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  private joke: Joke;

  constructor() {
    this.joke = JOKE;
  }

  ngOnInit() {
  }

}

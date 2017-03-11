import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-up-vote',
  templateUrl: 'up-vote.component.html',
  styleUrls: ['up-vote.component.css']
})
export class UpVoteComponent implements OnInit {

  constructor() { }

  @Input() votes : number;

  @Output() onVoteIncremented = new EventEmitter<boolean>();

  incrementVoteCount() {
    this.onVoteIncremented.emit();
  }

  ngOnInit() {
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpVoteComponent } from './up-vote.component';

describe('UpVoteComponent', () => {
  let component: UpVoteComponent;
  let fixture: ComponentFixture<UpVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

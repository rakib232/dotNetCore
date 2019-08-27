import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-jogging',
  templateUrl: './grid-jogging.component.html',
  styleUrls: ['./grid-jogging.component.css']
})
export class GridJoggingComponent implements OnInit {

  @Output() recordDeleted = new EventEmitter<any>();
  @Output () newClicked = new EventEmitter<any> ();
  @Output () editClicked = new EventEmitter<any>();
  @Input() joggingData: Array<any>;
  constructor() { }
  public deleteREcord(record) {
    this.recordDeleted.emit(record);
  }

  ngOnInit() {
  }

}

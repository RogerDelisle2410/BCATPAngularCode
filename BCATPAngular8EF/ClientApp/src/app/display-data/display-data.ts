import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.html',
  styleUrls: ['./display-data.css']
})
export class DataComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('crib') crib: any;

  constructor() { }



  ngOnInit() {
  }
}

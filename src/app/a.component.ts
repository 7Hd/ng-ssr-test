import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-a',
  template: `
    <p>
      a Works!
    </p>
    <p>{{data | json}}</p>
  `,
  styles: []
})
export class AComponent implements OnInit {

  data
  constructor(
    private ds: DataService,
  ) { }

  ngOnInit() {
    this.ds.getA().subscribe(data => this.data = data);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-detail',
  templateUrl: './get-detail.component.html',
  styleUrls: ['./get-detail.component.css']
})
export class GetDetailComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(x => {
      console.log(x);
    })
  }

}

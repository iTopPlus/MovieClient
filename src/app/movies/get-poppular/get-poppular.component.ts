import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-get-poppular',
  templateUrl: './get-poppular.component.html',
  styleUrls: ['./get-poppular.component.css']
})
export class GetPoppularComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  sendMovieID(movieid) {
    this.route.navigate(['/movies_details/' + movieid]);
  }

  nextPage() {

  }

  previousPage() {

  }
}

import { Component, OnInit } from '@angular/core';
import { GetPoppularMovieService } from './get-popular.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-poppular',
  templateUrl: './get-poppular.component.html',
  styleUrls: ['./get-poppular.component.css']
})
export class GetPoppularComponent implements OnInit {
  public movies_list: any;
  public curentPage: number;
  constructor(public getPoppularMovieService: GetPoppularMovieService, public route: Router) { }
  ngOnInit() {
    this.curentPage = 1;
    this.getMovies(1);
  }

  getMovies(page) {
    this.getPoppularMovieService.getPoppularMovies(page).subscribe((result) => {
      console.log('result ::', result);
      this.movies_list = result;
    });
  }

  onChangePage(type) {
    if (type === 'next') {
      this.curentPage += 1;
    } else {
      if (this.curentPage > 1) {
        this.curentPage -= 1;
      }
    }
    this.getMovies(this.curentPage);
  }

  sendMovieID(movieid) {
    console.log('sendMovieID :::', movieid);
    this.route.navigate(['/movies_details/' + movieid]);
  }

  nextPage() {

  }

  previousPage() {

  }
}

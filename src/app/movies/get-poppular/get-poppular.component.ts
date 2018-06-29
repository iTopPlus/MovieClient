import { Component, OnInit } from '@angular/core';
import { GetPoppularMovieService } from './get-popular.service';

@Component({
  selector: 'app-get-poppular',
  templateUrl: './get-poppular.component.html',
  styleUrls: ['./get-poppular.component.css']
})
export class GetPoppularComponent implements OnInit {
  public movies_list: any;
  public curentPage: number;
  constructor(public getPoppularMovieService: GetPoppularMovieService) { }

  ngOnInit() {
    this.curentPage = 1;
    this.getMovies(1);
  }

  getMovies(page) {
    this.getPoppularMovieService.getPoppularMovies(page).subscribe((result) => {
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

}

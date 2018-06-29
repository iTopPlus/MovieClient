import { Component, OnInit } from '@angular/core';
import { GetDetailService } from './get-detail.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-get-detail',
  templateUrl: './get-detail.component.html',
  styleUrls: ['./get-detail.component.css']
})
export class GetDetailComponent implements OnInit {
  public movies_id: string;
  public video: any;
  public review: any;
  public detail: any;
  constructor(public getDetailService: GetDetailService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movies_id = params['movie_id'];
      this.getVideo(this.movies_id);
      this.getReview(this.movies_id);
      this.getDetailMovie(this.movies_id);
    });
  }

  getVideo(movie_id) {
    this.getDetailService.getVideoMovie(movie_id).subscribe((result) => {
      this.video = result;
    });
  }

  getReview(movie_id) {
    this.getDetailService.getReviewMovie(movie_id).subscribe((result) => {
      this.review = result;
    });
  }

  getDetailMovie(movie_id) {
    this.getDetailService.getDetailMovie(movie_id).subscribe((result) => {
      this.detail = result;
    });
  }
}

import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from './review.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.component.html'
})
export class ReviewAddComponent {

  public review: Review = <Review>{};

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }

  public saveReview() {
    this.http.post(this.baseUrl + 'api/Reviews', this.review).subscribe(result => {
      this.router.navigateByUrl("/reviews");
    }, error => console.error(error))
  }
}

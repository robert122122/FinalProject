import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from './review.models';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html'
})
export class ReviewsComponent {
  public reviews: Review[];
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadReviews();
  }

  public deleteReview(review: Review) {
    this.http.delete(this.baseUrl + 'api/reviews/' + review.id).subscribe(result => {
      this.loadReviews();
    }, error => console.error(error))
  }

  loadReviews() {
    this.http.get<Review[]>(this.baseUrl + 'api/reviews').subscribe(result => {
      this.reviews = result;
    }, error => console.error(error));
  }
}

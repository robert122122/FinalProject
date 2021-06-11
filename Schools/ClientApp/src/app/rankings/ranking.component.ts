import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ranking } from './ranking.models';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html'
})
export class RankingsComponent {
  public rankings: Ranking[];
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadRankings();
  }

  public deleteRanking(ranking: Ranking) {
    this.http.delete(this.baseUrl + 'api/ranking/' + ranking.id).subscribe(result => {
      this.loadRankings();
    }, error => console.error(error))
  }

  loadRankings() {
    this.http.get<Ranking[]>(this.baseUrl + 'api/rankings').subscribe(result => {
      this.rankings = result;
    }, error => console.error(error));
  }
}

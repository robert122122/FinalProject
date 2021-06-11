import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { School } from './school.models';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html'
})
export class SchoolsComponent {
  public schools: School[];
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadSchools();
  }

  public deleteSchool(school: School) {
    this.http.delete(this.baseUrl + 'api/schools/' + school.id).subscribe(result => {
      this.loadSchools();
    }, error => console.error(error))
  }

  loadSchools() {
    this.http.get<School[]>(this.baseUrl + 'api/schools').subscribe(result => {
      this.schools = result;
    }, error => console.error(error));
  }
}

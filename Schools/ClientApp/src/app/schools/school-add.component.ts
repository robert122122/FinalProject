import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { School } from './school.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school-add',
  templateUrl: './school-add.component.html'
})
export class SchoolAddComponent {

  public school: School = <School>{};

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }

  public saveSchool() {
    this.http.post(this.baseUrl + 'api/Schools', this.school).subscribe(result => {
      this.router.navigateByUrl("/schools");
    }, error => console.error(error))
  }
}

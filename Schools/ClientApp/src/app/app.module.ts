import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SchoolsComponent } from './schools/school.component';
import { SchoolAddComponent } from './schools/school-add.component';
import { TeachersComponent } from './teachers/teacher.component';
import { TeacherAddComponent } from './teachers/teacher-add.component';
import { ReviewsComponent } from './reviews/review.component';
import { ReviewAddComponent } from './reviews/review-add.component';
import { RankingsComponent } from './rankings/ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    SchoolsComponent,
    SchoolAddComponent,
    TeachersComponent,
    TeacherAddComponent,
    ReviewsComponent,
    ReviewAddComponent,
    RankingsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'schools', component: SchoolsComponent },
      { path: 'school-add', component: SchoolAddComponent },
      { path: 'teachers', component: TeachersComponent },
      { path: 'teacher-add', component: TeacherAddComponent },
      { path: 'review-add', component: ReviewAddComponent },
      { path: 'reviews', component: ReviewsComponent },
      { path: 'rankings', component: RankingsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

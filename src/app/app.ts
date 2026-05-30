import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesList } from './courses-list/courses-list';
import { CourseDetail } from './course-detail/course-detail';

@Component({
  selector: 'app-root',
  imports: [CoursesList, CourseDetail],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('booking-system');
}

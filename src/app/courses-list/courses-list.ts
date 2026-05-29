import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  imports: [CommonModule],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css',
})
export class CoursesList {
  title: string = "Available Courses";
  courses = [
    {id: 1, title: 'Intro to Angular', description: "Learn angular in this course.", price: 49, date: "02-01-2025", soldOut: false, image: 'angular-logo.png'},
    {id: 2, title: 'Advanced Angular', description: "Take your Angular skills to the next level.", price: 99, date: "02-01-2025", soldOut: true, image: 'angular-logo.png'}
  ];

  viewDetails(course: string): void {
    alert(`Viewing deatils for ${course}`)
  }
}

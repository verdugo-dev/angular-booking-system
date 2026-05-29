import { Component, OnInit } from '@angular/core';
import { CourseCard } from '../course-card/course-card';

@Component({
  selector: 'app-courses-list',
  imports: [CourseCard],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css',
})
export class CoursesList implements OnInit {

  title: string = "Available Courses";
  courses = [
    {id: 1, title: 'Intro to Angular', description: "Learn angular in this course.", price: 49, date: "02-01-2025", soldOut: false, image: 'angular-logo.png', onSale: false },
    {id: 2, title: 'Advanced Angular', description: "Take your Angular skills to the next level.", price: 99, date: "02-01-2025", soldOut: true, image: 'angular-logo.png', onSale: true },
    {id: 3, title: 'Intro RXJS', description: "Take your Angular skills to the next level.", price: 99, date: "02-01-2025", soldOut: false, image: 'rx-logo.png', onSale: true }
  ];

  ngOnInit(): void {
    console.log("CoursesList initialized")
  }
}

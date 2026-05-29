import { Component, OnInit } from '@angular/core';
import { CourseCard } from '../course-card/course-card';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course';

@Component({
  selector: 'app-courses-list',
  imports: [CourseCard],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css',
})
export class CoursesList implements OnInit {

  title: string = "Available Courses";
  wishlist: Course[] = [];
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  onCourseBooked(course: Course): void {
    console.log('Parent heard about booking: ', course.title);
  }

  onWishlistAdded(course: Course) {
    console.log("Wishlist event triggered for:", course.title);
    this.wishlist.push(course);
  }
}

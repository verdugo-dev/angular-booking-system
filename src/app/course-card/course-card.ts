import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Course } from '../models/course.model';


@Component({
  selector: 'app-course-card',
  imports: [CommonModule, DatePipe, CurrencyPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {

  @Input() course!: Course;
  @Output() courseBooked = new EventEmitter<Course>();
  @Output() wishlistAdded = new EventEmitter<Course>();

  onBookCourse(): void {
    this.courseBooked.emit(this.course);
  }

  onAddToWishlist() {
    this.wishlistAdded.emit(this.course);
  }

}

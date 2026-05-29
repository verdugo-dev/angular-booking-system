import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';


@Component({
  selector: 'app-course-card',
  imports: [CommonModule, DatePipe, CurrencyPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {

  @Input() course: any;
  @Output() courseBooked = new EventEmitter<any>();
  @Output() wishlistAdded = new EventEmitter<any>();

  onBookCourse(): void {
    this.courseBooked.emit(this.course);
  }

  onAddToWishlist() {
    this.wishlistAdded.emit(this.course);
  }

}

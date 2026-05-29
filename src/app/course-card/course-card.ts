import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';


@Component({
  selector: 'app-course-card',
  imports: [CommonModule, DatePipe, CurrencyPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {

  @Input() course: any;

  viewDetails(course: string): void {
    alert(`Viewing deatils for ${course}`)
  }

}

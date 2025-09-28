import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HotelService } from '../../services/hotel.service';


@Component({
  selector: 'app-hotel-detail',
  imports: [CommonModule],
  styleUrl: './hotel-detail.scss',
  template: `
    <div *ngIf="hotel">
      <h2>{{ hotel.name }}</h2>
      <p>Location: {{ hotel.location }}</p>
      <p>Price: {{ hotel.price | currency:'INR' }}</p>
      <p>Rating: {{ hotel.rating }} ★</p>
    </div>
  `
})
export class HotelDetailComponent {
  hotel: any;

  constructor(private route: ActivatedRoute, private hotelService: HotelService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hotel = this.hotelService.getHotels().find(h => h.id === id);
  }
}

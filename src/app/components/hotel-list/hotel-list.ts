import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HotelService } from '../../services/hotel.service';
import { FilterHotelsPipe } from '../../pipes/filter-hotels-pipe';
import { Hotel } from '../../models/hotel';

@Component({
  selector: 'app-hotel-list',
  imports: [CommonModule, FormsModule, RouterLink, FilterHotelsPipe],
  templateUrl: './hotel-list.html',
  styleUrl: './hotel-list.scss'
})
export class HotelListComponent {
  searchText = '';
  hotels: Hotel[] = [];

  constructor(private hotelService: HotelService) {
    this.hotels = this.hotelService.getHotels();
  }

  deleteHotel(id: number) {
    this.hotels = this.hotels.filter(h => h.id !== id);
  }
}

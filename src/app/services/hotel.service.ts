import { Injectable } from '@angular/core';
import { Hotel } from '../models/hotel';

@Injectable({ providedIn: 'root' })
export class HotelService {
  private hotels: Hotel[] = [
    { id: 1, name: 'Taj Palace', location: 'Delhi', price: 5000, rating: 5, roomsAvailable: 3, imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b', updatedOn: new Date() },
    { id: 2, name: 'Oberoi', location: 'Mumbai', price: 4000, rating: 4, roomsAvailable: 0, imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b', updatedOn: new Date() },
    { id: 3, name: 'ITC Maurya', location: 'Bangalore', price: 3500, rating: 3, roomsAvailable: 5, imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b', updatedOn: new Date() }
  ];

  getHotels() {
    return this.hotels;
  }
}

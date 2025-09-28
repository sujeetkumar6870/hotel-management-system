import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterHotels'
})
export class FilterHotelsPipe implements PipeTransform {
  transform(hotels: any[], searchText: string): any[] {
    if (!searchText) return hotels;
    return hotels.filter(h =>
      h.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}


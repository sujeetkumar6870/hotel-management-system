import { Routes } from '@angular/router';
import { HotelListComponent } from './components/hotel-list/hotel-list';
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail';
import { BookingComponent } from './components/booking/booking';
import { AdminComponent } from './components/admin/admin';
import { ManageHotelsComponent } from './components/manage-hotels/manage-hotels';
import { ManageBookingsComponent } from './components/manage-bookings/manage-bookings';
import { NotFoundComponent } from './components/not-found/not-found';

export const appRoutes: Routes = [
  { path: '', component: HotelListComponent },
  { path: 'hotel/:id', component: HotelDetailComponent },
  { path: 'booking', component: BookingComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'manage-hotels', component: ManageHotelsComponent },
      { path: 'manage-bookings', component: ManageBookingsComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

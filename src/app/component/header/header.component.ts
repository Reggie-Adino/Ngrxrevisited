import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  cartCount = this.store.select('cartNumber')


  constructor(private store:Store<{cartNumber:number}>) {
    // this.cartCount$ = this.store.select(cartSelector)
  }

}

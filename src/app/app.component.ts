import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import {Store} from '@ngrx/store'; 
import { addToCart,removeCart } from './states/store/cart.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrxrevisited';

  cartNumber:number = 0;

  constructor(private store:Store) {

  }

  addCart() {
    this.store.dispatch(addToCart())
  }

  removeCart() {
    this.store.dispatch(removeCart())
  }
}

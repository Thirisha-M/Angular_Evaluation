import { Component } from '@angular/core';

@Component({
  selector: 'app-individualaddtocart',
  templateUrl: './individualaddtocart.component.html',
  styleUrls: ['./individualaddtocart.component.css'],
})
export class IndividualaddtocartComponent {
  // Properties
  sizes = ['1 Box', '2 Box', '3 Box'];
  selectedSize = this.sizes[0]; // Default size
  quantity = 1;
  pricePerBox = 150; // Price for 1 box
  subtotal = this.pricePerBox; // Initial subtotal

  // Methods
  selectSize(size: string) {
    this.selectedSize = size;
    this.updateSubtotal();
  }

  increaseQuantity() {
    this.quantity++;
    this.updateSubtotal();
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.updateSubtotal();
    }
  }

  updateSubtotal() {
    this.subtotal = this.quantity * this.pricePerBox;
  }

  addToCart() {
    alert(`Added to cart: ${this.quantity} x ${this.selectedSize}`);
  }

  buyNow() {
    alert(`Purchased: ${this.quantity} x ${this.selectedSize} for Rs. ${this.subtotal}`);
  }
}

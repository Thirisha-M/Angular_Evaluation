import { Component } from '@angular/core';
import { item } from './store_Management.Model';

@Component({
  selector: 'app-store-management',
  templateUrl: './store-management.component.html',
  styleUrls: ['./store-management.component.css']
})
export class StoreManagementComponent {
  items: item[] = [];
  newitems: item = { Itemid: 0, Quantity: 0, AddItems: '', TotalAmount: 0 };
  totalBill: number = 0;
  itemPrices = { 5001: 20, 5002: 25, 5003: 30, 5004: 40, 5005: 50 };

  Billamount() {
    if (this.newitems.Itemid && this.newitems.Quantity > 0) {
      let price = this.itemPrices[this.newitems.Itemid as keyof typeof this.itemPrices];

      if (this.newitems.Itemid === 5004 || this.newitems.Itemid === 5005) {
        price = price * 0.8;
      }
      this.newitems.TotalAmount = price * this.newitems.Quantity;
      this.items.push({ ...this.newitems });
      if (this.newitems.AddItems === 'Y') {
        this.resetForm();
        this.calculateTotalBill();
      } else if (this.newitems.AddItems === 'N') {
        this.calculateTotalBill();
      }
    }
  }

  deleteitems(Itemid: number) {
    this.items = this.items.filter(item => item.Itemid !== Itemid);
    this.calculateTotalBill();
  }

  resetForm() {
    this.newitems = { Itemid: 0, Quantity: 0, AddItems: '', TotalAmount: 0 };
  }

  calculateTotalBill() {
    this.totalBill = this.items.reduce((sum, item) => sum + item.TotalAmount, 0);
  }
}

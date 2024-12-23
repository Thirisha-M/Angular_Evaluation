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

  itemList = [
    { Itemid: 5001, ItemName: 'Item 5001', Price: 20, Discount: 'No Discount', StockQuantity: 100 },
    { Itemid: 5002, ItemName: 'Item 5002', Price: 25, Discount: 'No Discount', StockQuantity: 200 },
    { Itemid: 5003, ItemName: 'Item 5003', Price: 30, Discount: 'No Discount', StockQuantity: 150 },
    { Itemid: 5004, ItemName: 'Item 5004', Price: 40, Discount: '20% Off', StockQuantity: 50 },
    { Itemid: 5005, ItemName: 'Item 5005', Price: 50, Discount: '20% Off', StockQuantity: 30 }
  ];

  restockQuantity: { [key: number]: number } = {};

  restockItem(itemId: number) {
    const restockQty = this.restockQuantity[itemId];
    const item = this.itemList.find(item => item.Itemid === itemId);

    if (item && restockQty > 0) {
      item.StockQuantity += restockQty;
      this.restockQuantity[itemId] = 0; 
      alert(`Successfully restocked Item ${itemId} by ${restockQty} units.`);
    } else {
      alert('Please enter a valid restock quantity.');
    }
  }
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
        this.resetForm
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

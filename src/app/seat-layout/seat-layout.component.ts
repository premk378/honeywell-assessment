import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat-layout',
  templateUrl: './seat-layout.component.html',
  styleUrls: ['./seat-layout.component.css']
})
export class SeatLayoutComponent implements OnInit{

  normalSeatsArr: any[] = [];
  premiumSeatsArr: any[] = [];

  selected:any = {}

  normalSeats = {
    price: 150,
    quantity: 200
  }

  premiumSeats = {
    price: 350,
    quantity: 50
  }

  totalValue: number = 0;

  ngOnInit(): void {
    this.normalSeatsArr = Array(this.normalSeats.quantity).fill(1).map((x,i) => {
      return {type: 'normal', isSelected: false, price: this.normalSeats.price}
    });
    this.premiumSeatsArr = Array(this.premiumSeats.quantity).fill(1).map((x,i) => {
      return {type: 'premium', isSelected: false, price: this.premiumSeats.price}
    });
  }

  onSeatClick(seat: any) {
    seat.isSelected = !seat.isSelected;

    const selectedNormalSeats = this.normalSeatsArr.filter(seat => seat.isSelected).length;
    const selectedPremiumSeats = this.premiumSeatsArr.filter(seat => seat.isSelected).length;

    const normal = {
      count: selectedNormalSeats,
      price: this.normalSeats.price,
      total: this.normalSeats.price * selectedNormalSeats
    }

    const premium = {
      count: selectedPremiumSeats,
      price: this.premiumSeats.price,
      total: this.premiumSeats.price * selectedPremiumSeats
    }

    this.selected = {normal, premium};
    this.totalValue = normal.total + premium.total;
  }

}

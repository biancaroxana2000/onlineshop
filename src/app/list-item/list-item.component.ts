import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  // isVisible: boolean = true;
  // title : string = "Angular";
  // onChange(): void {
  //   if (this.isVisible) {
  //     this.isVisible = false;
  //
  //   } else {
  //     this.isVisible = true;
  //   }
  // }
  itemList : Array <any> = [];
  constructor() {
    let item1 = {
      "title" : "Bicicleta",
      "description" : "Are 2 roti",
      "imageURL" : "https://silvis.ro/images/shopproducts/big/bicicleta-silvis-mtb-3x8-viteze-roti-26-premium-silver-56907.png",
      "price" : "1000 lei"
    };
    this.itemList.push(item1);
    let item2 = {
      "title" : "Motocicleta",
      "description" : "Are 2 roti",
      "imageURL" : "https://i.pinimg.com/564x/82/d0/c1/82d0c14466702ae7fe16510481e4201f.jpg",
      "price" : "9000 lei"
    };
    this.itemList.push(item2);
  }
  onEdit() : void {

  }
  onDelete() : void {

  }

}

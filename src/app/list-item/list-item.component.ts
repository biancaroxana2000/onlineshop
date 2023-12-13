import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {ItemService} from "../services/item.service";

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
  @Output() changeData = new EventEmitter<any>();
  itemList : Array <any> = [];
  constructor(private itemService : ItemService) {
   this.itemService.getItems().subscribe((items:Array<any>)=>{
     this.itemList = items;
   })
  }
  onEdit(item : any) : void {
    console.log("S-a apasat onEdit");
    this.changeData.emit(item); //metoda emit() ne ajuta sa scoatem din componenta obiectul item

  }
  onDelete(item:any) : void {
   console.log(item);
   this.itemService.deleteItem(item.id);
  }

}

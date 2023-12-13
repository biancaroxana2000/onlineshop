import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-add-edit-item',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './add-edit-item.component.html',
  styleUrls: ['./add-edit-item.component.css']
})
export class AddEditItemComponent {
  title:FormControl<string | null> = new FormControl('', [Validators.required]);
  description:FormControl<string | null> = new FormControl('', [Validators.required]);
  imageURL:FormControl<string | null> = new FormControl('', [Validators.required]);
  price:FormControl<string | null> = new FormControl('', [Validators.required]);

  getErrorMessage(input:FormControl):any {
    if (input.hasError('required')) {
      return 'You must enter a value';
    }

    return "";
  }
  onSave(): void {
    let item = {
      "title" : this.title.getRawValue()!,
      "description" :this.description.getRawValue()!,
      "imageURL" : this.imageURL.getRawValue()!,
      "price" : this.price.getRawValue()!
      //semnul exclamarii asigura compilatorul ca valoarea returnata este diferita de null (null operator)
    };
    console.log(item);

  }

}

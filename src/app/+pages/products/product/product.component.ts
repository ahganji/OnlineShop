import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../+models/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product:Product={pictureURL:'', name:'گوشی موبایل شیائومی مدل Redmi Note 13 4G', group:'گوشیهای هوشمند', stockCount:10,
  starCount:3, price:1126000, discountPct:3, spec:'دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت'};
  @Output() onMore = new EventEmitter<Product>()
}

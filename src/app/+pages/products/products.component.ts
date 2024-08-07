import { Component } from '@angular/core';
import { Product } from '../../+models/products';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  select(p:Product) {
    console.log(p);
  }

  products: Product[] = [
    {
      pictureURL: '', name: 'گوشی موبایل شیائومی مدل Redmi Note 13 4G', group: 'گوشیهای هوشمند', stockCount: 10,
      starCount: 3, price: 1126000, discountPct: 3, spec: 'دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت'
    },
    {
      pictureURL: '', name: 'گوشی موبایل سامسونگ مدل Galaxy A15', group: 'گوشیهای هوشمند', stockCount: 5,
      price: 8210000, discountPct: 5, spec: 'دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - ویتنام'
    },
    {
      pictureURL: '', name: 'گوشی موبایل شیائومی مدل Redmi A3', group: 'گوشیهای هوشمند', stockCount: 8,
      price: 5395000, spec: 'دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت'
    },
    {
      pictureURL: '', name: 'گوشی موبایل شیائومی مدل Redmi 12', group: 'گوشیهای هوشمند', stockCount: 20, starCount: 1,
      price: 8800000, discountPct: 10, spec: 'دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت به همراه شارژر - گلوبال'
    },
    {
      pictureURL: '', name: 'گوشی موبایل نوکیا مدل 106 2023', group: 'گوشیهای هوشمند', stockCount: 12,
      price: 840000, spec: 'دو سیم‌ کارت - مونتاژ ایران تحت لیسانس نوکیا'
    },
  ];
}

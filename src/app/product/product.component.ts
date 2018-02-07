import {Component} from '@angular/core'
@Component({
 
 templateUrl:'./product.component.html',
 styleUrls: ['./product.component.css']
})
export class ProductComponent{
 public pageTitle: string = 'Products List';
 
 products: any[] =[
          {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
    }
 ];
}
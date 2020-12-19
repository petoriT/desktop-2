import { Component, Input, OnInit } from "@angular/core";
import { ProductApiService } from "src/app/core-modules/services/products/product-api/product-api.service";

@Component({
  selector: "app-product-view-modal",
  templateUrl: "./product-view-modal.component.html",
  styleUrls: ["./product-view-modal.component.scss"],
})
export class ProductViewModalComponent implements OnInit {
  @Input() data: any;
  constructor(private productApi: ProductApiService) {}

  ngOnInit() {
    console.log(this.data);
  }

  replacePicture() {
    //upload new image
    //update product
    //delete cloudinary image
    //this.deleteCloudImage(Image_data);
  }

  deleteCloudImage(data) {
    this.productApi.deleteCloudImage(data).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

import { Component, OnInit } from "@angular/core";
import { ProductStateService } from "src/app/core-modules/services/products/product-state/product-state.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-promo-slides",
  templateUrl: "./promo-slides.component.html",
  styleUrls: ["./promo-slides.component.scss"],
})
export class PromoSlidesComponent implements OnInit {
  products$;
  public slides = [
    "<ion-card>hgh</ion-card","tyeyte",
  ]
  constructor(
    private productState: ProductStateService,
    private router: Router
  ) {}

  ngOnInit() {}

  loadLikedProducts() {
    this.products$.subscribe((res) => {
      this.productState.setSearchingProducts(res);
      this.productState.setMainProducts(res);
      this.router.navigate(["/landing/all-products"]);
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CartService } from "src/app/core-modules/services/cart/cart-state/cart.service";
import { CartModalComponent } from "../modals/cart-modal/cart-modal.component";
import { Location } from "@angular/common";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import { ProductStateService } from 'src/app/core-modules/services/products/product-state/product-state.service';
import { ProductFacadeService } from 'src/app/core-modules/services/products/product-facade/product-facade.service';
import { Router } from '@angular/router';
 

@Component({
  selector: "app-user-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  cartItemCount;
  transparent_toolbar;
  show_back;
  headerStatus$;
  token ;
  profile$;
  avatar;
  showSearchB = false;
  constructor(
    private _location: Location,
    private cartService: CartService,
    private modalCtrl: ModalController,
    private headerState: HeaderStateService,
    private productState: ProductStateService,
    private _productFacade: ProductFacadeService,
    private router: Router,

  ) {}

  ngOnInit() {
    this.cartItemCount = this.cartService.getCartItemCount();

    this.headerStatus$ = this.headerState.getHeaderStatus();
    this.headerState.getHeaderStatus().subscribe(
      (res) => {
        if (res == "product_detail") {
          this.transparent_toolbar = "clear_navbar";
        }
      },
      (err) => {
        console.log(err);
      }
    );
    this.token = !!localStorage.getItem("token");

  }

  async openCart() {
    const modal = await this.modalCtrl.create({
      component: CartModalComponent,
      //enableBackdropDismiss: false,
      cssClass: "custom-modal-css",
    });
    return await modal.present();
  }
  goBack() {
    this._location.back();
    this.headerState.resetHeaderStatus();
  }
  showSearch(){
    //this.showSearchB = true
    this.loadAllProducts()
  }
  cancelSearch(){
    this.showSearchB = false
  }

  loadAllProducts() {
    localStorage.setItem("all_p", "all departments");
    this._productFacade.loadProducts();
    this._productFacade.getProducts$().subscribe(
      (res) => {
        this.productState.setMainProducts(res);
        this.productState.setSearchingProducts(res);
        this.router.navigate(["/landing/all-products"]);
      },
      (err) => {}
    );
  }
}

import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { CartService } from "src/app/core-modules/services/cart/cart-state/cart.service";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  public show_top_picks;
  public products$;
  public liked
  public show_liked
  constructor(
    private cartService: CartService,
    public alertController: AlertController,
    private _productFacade: ProductFacadeService,
    private headerState: HeaderStateService
  ) {}

  ngOnInit() {
    //load all products
    this._productFacade.loadProducts();
    this._productFacade.loadUserlikedProducts();
    this.products$ = this._productFacade.getUserlikedProducts();

    this.products$.subscribe(
      res => {
        if(res.length==0){
          this.show_liked = false
        }else{
          this.show_liked = true
        }
        this.liked = res
        console.log(this.show_liked);
      }
    )
  }

  addToCart(product) {
    this.cartService.addProduct(product);
  }
  
}

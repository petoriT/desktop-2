import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";
import { CartService } from "src/app/core-modules/services/cart/cart-state/cart.service";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
import { HeaderStateService } from "src/app/core-modules/services/header/header-state/header-state.service";
import { VoucherApiService } from "src/app/core-modules/services/vouchers/voucher-api/voucher-api.service";
import { CartFacadeService } from "src/app/core-modules/services/cart/cart-facade/cart-facade.service";

@Component({
  selector: "app-cart-modal",
  templateUrl: "./cart-modal.component.html",
  styleUrls: ["./cart-modal.component.scss"],
})
export class CartModalComponent implements OnInit {
  cart = [];
  token;
  public profile$;
  public apply_voucher;
  constructor(
    private cartService: CartService,
    private modalCtrl: ModalController,
    private router: Router,
    private userFacade: UserFacadeService,
    private headerState: HeaderStateService,

    private voucherAPI: VoucherApiService,
    private cartFacade: CartFacadeService
  ) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.token = !!localStorage.getItem("token");
    this.userFacade.getUser$().subscribe(
      (res) => {
        this.profile$ = res;
      },
      (err) => {
        console.log(err);
      }
    );
    this.getVoucherProduct();
  }

  getVoucherProduct() {
    this.voucherAPI
      .getVoucherByNumber({ voucher_number: "y3WlnoZpfW" })
      .subscribe(
        (res) => {
          console.log(res.voucher);
          res.voucher.products.forEach((p) => {
            let promo = res.voucher;
            //if voucher
            if (!promo.run_sale) {
              let type = promo.type;
              let discount = p.discount;
              let product = p.prod;
              let items_exceeding = p.items_exceeding;
              let quota = p.p_quota;
              let secondary_product = p.s_pro;
              let modified_price;
              let product_bind;

              switch (type) {
                case "itemDiscount":
                  modified_price = product.productPrice - discount;
                  this.modifyProduct(
                    null,
                    product,
                    modified_price,
                    product.amount,
                    type,
                    null,
                    null
                  );
                  break;

                case "buy1get1free":
                  this.modifyProduct(
                    null,
                    product,
                    product.productPrice,
                    product.amount,
                    type,
                    null,
                    null
                  );
                  break;

                case "volume":
                  let sub_total =
                    product.productPrice * items_exceeding - discount;
                  let new_item_price = sub_total / items_exceeding;
                  this.modifyProduct(
                    null,
                    product,
                    new_item_price,
                    items_exceeding,
                    type,
                    null,
                    null
                  );
                  break;

                case "combo":
                  product_bind = [product._id, secondary_product._id];

                  modified_price = secondary_product.productPrice - discount;

                  //minify this script
                  let secondary_product_b = {
                    amount: secondary_product.amount,
                    category: secondary_product.category,
                    productDescription: secondary_product.productDescription,
                    productImage: secondary_product.productImage,
                    productName: secondary_product.productName,
                    productPrice: modified_price,
                    original_price: secondary_product.productPrice,
                    storeId: secondary_product.stosreId,
                    sale: secondary_product.sale,
                    sale_type: secondary_product.sale_type,
                    product_bind: product_bind,
                    promo_kind: type,
                    thresh: secondary_product.amount,
                    _id: secondary_product._id,
                  };
                  this.modifyProduct(
                    null,
                    product,
                    product.productPrice,
                    product.amount,
                    type,
                    product_bind,
                    secondary_product_b
                  );
                  this.modifyProduct(
                    true,
                    secondary_product,
                    secondary_product_b.productPrice,
                    secondary_product.amount,
                    type,
                    product_bind,
                    null
                  );
                  break;
              }
            }
          });
        },
        (err) => {
          console.log(err);
        }
      );
  }

  modifyProduct(
    sec,
    product,
    modified_price,
    amount,
    promo_kind,
    product_bind,
    secondary_product
  ) {
    let mProduct = {
      sec: sec,
      amount: amount,
      category: product.category,
      productDescription: product.productDescription,
      productImage: product.productImage,
      productName: product.productName,
      productPrice: modified_price,
      original_price: product.productPrice,
      storeId: product.storeId,
      sale: true,
      sale_type: promo_kind,
      product_bind: product_bind,
      promo_kind: promo_kind,
      secondary_product: secondary_product,
      thresh: amount,
      _id: product._id,
    };
    this.cartFacade.addToCart(mProduct);
  }

  onAmountChange(p, value) {
    if (p.promo || p.sale) {
      console.log(p.amount);
    } else {
      for (let product of this.cart) {
        if (product._id == p._id) {
          console.log(product.amount);
        }
      }
    }
  }

  decreaseCartItem(product) {
    //if combo look for sec product
    if (product.secondary_product) {
      let sec_pro = this.cart.filter((item) => {
        return item._id == product.secondary_product._id;
      });
      this.cartService.decreaseProduct(sec_pro[0]);
    }
    // if any
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    //if combo look for sec product
    if (product.secondary_product) {
      let sec_pro = this.cart.filter((item) => {
        return item._id == product.secondary_product._id;
      });
      this.cartService.increaseProduct(sec_pro[0]);
    }
    // if any
    this.cartService.increaseProduct(product);
  }

  removeCartItem(product) {
    //if combo look for sec product
    if (product.secondary_product) {
      let sec_pro = this.cart.filter((item) => {
        return item._id == product.secondary_product._id;
      });
      this.cartService.removeProduct(sec_pro[0]);
    }
    // if any
    this.cartService.removeProduct(product);
  }

  getTotal() {
    let total = this.cart.reduce((i, j) => i + j.productPrice * j.amount, 0);
    localStorage.setItem("total", total);
    return total;
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  clearItems() {
    localStorage.removeItem("cart");
    this.cart = [];
    this.cartService.clearCart();
  }

  checkout(cart) {
    // set timeOut UserExperience
    if (cart.length > 0) {
      setTimeout(() => {
        this.modalCtrl.dismiss();
      }, 1);
      if (
        this.token &&
        !this.profile$.first_name &&
        !this.profile$.last_name &&
        !this.profile$.address
      ) {
        this.headerState.setReturnRoute("/buy");
        this.router.navigate(["/user/update-info"]);
      } else {
        this.router.navigate(["/payment/checkout"]);
      }
    } else {
      this.modalCtrl.dismiss();
    }
    console.log(cart);
  }
  applyVoucher(){
    if(this.apply_voucher){
      //apply vousher please set it back to false
    }else{
      this.apply_voucher = true
    }
  }
}

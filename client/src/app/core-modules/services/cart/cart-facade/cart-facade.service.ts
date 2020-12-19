import { Injectable } from "@angular/core";
import { CartService } from "src/app/core-modules/services/cart/cart-state/cart.service";
import { VoucherApiService } from "src/app/core-modules/services/vouchers/voucher-api/voucher-api.service";

@Injectable({
  providedIn: "root",
})
export class CartFacadeService {
  constructor(
    private cartState: CartService,
    private voucherApi: VoucherApiService
  ) {}

  addToCart(product) {
    const p = { ...product };
    console.log(p);
    switch (p.promo_kind) {
      case "itemDiscount":
        this.cartState.addProduct(p);
        break;

      case "buy1get1free":
        this.cartState.addProduct(p);
        //minify this script
        let mP = {
          amount: p.amount,
          category: p.category,
          productDescription: p.productDescription,
          productImage: p.productImage,
          productName: p.productName,
          storeId: p.storeId,
          product_bind: p.product_bind,
          promo_kind: p.promo_kind,
          _id: p._id,
          sale_type: p.promo_kind,
          original_price: p.productPrice,
          productPrice: 0,
          sale: true,
          thresh: 1,
        };
        this.cartState.addProduct(mP);
        break;

      case "volume":
        this.cartState.addProduct(p);
        break;

      case "combo":
        this.cartState.addProduct(p);
        break;

      default:
        //if not modified for sale check if product has sale
        if (p.sale) {
          this.saleCheck(p);
        } else {
          this.cartState.addProduct(p);
        }
        break;
    }
  }

  //intercept products and modify products
  saleCheck(current_p) {
    //check if  product has voucher
    let item = current_p;
    if (item.sale) {
      //check ssale id and get voucher
      item.sale_type.forEach((sale_id) => {
        console.log(sale_id);
        this.voucherApi.getVoucher({ id: sale_id }).subscribe(
          (res) => {
            console.log(res);
            let promo = res.voucher;
            for (let p of promo.products) {
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
          },
          (err) => {}
        );
      });
    } else {
      return item;
    }
  }

  //modify the products and convert to voucher prices
  modifyProduct(
    sec,
    product,
    modified_price,
    amount,
    promo_kind,
    product_bind,
    secondary_product
  ) {
    let p = {
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
    switch (p.promo_kind) {
      case "itemDiscount":
        this.cartState.addProduct(p);
        break;

      case "buy1get1free":
        this.cartState.addProduct(p);
        //minify this script
        let mP = {
          amount: p.amount,
          category: p.category,
          productDescription: p.productDescription,
          productImage: p.productImage,
          productName: p.productName,
          storeId: p.storeId,
          product_bind: p.product_bind,
          promo_kind: p.promo_kind,
          _id: p._id,
          sale_type: p.promo_kind,
          original_price: p.productPrice,
          productPrice: 0,
          sale: true,
          thresh: 1,
        };
        this.cartState.addProduct(mP);
        break;

      case "volume":
        this.cartState.addProduct(p);
        break;

      case "combo":
        this.cartState.addProduct(p);
        break;

      default:
        //if product sale not modified for sale check if product has sale
        this.cartState.addProduct(p);
        break;
    }
  }
}

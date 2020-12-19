import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ProductApiService } from 'src/app/core-modules/services/products/product-api/product-api.service'
import { VoucherApiService } from 'src/app/core-modules/services/vouchers/voucher-api/voucher-api.service'


@Component({
  selector: 'app-addpromo',
  templateUrl: './addpromo.component.html',
  styleUrls: ['./addpromo.component.scss'],
})
export class AddpromoComponent implements OnInit {

  public addPromo: FormGroup;

  public productList: FormArray;

  public products: any;

  // returns all form groups under properties
  get productFormGroup() {
    return this.addPromo.get('products') as FormArray;
  }

  constructor(
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    private productService: ProductApiService,
    private voucherService: VoucherApiService
  ) { }

  ngOnInit() {
    this.productService.getStoreProducts().subscribe(
      res => {
        this.products = res.product
      },
      err => {
        console.log(err)
      }
    )

    this.addPromo = this.formBuilder.group({
      run_sale: [false ,Validators.compose([Validators.required])],
      type: ['Item_Discount' ,Validators.compose([Validators.required])],
      title: ['DecemberSpecial' ,Validators.compose([Validators.required])],
      //products: this.formBuilder.array([this.createProduct()]),
      products: [[
        {
          _id:'5e9c6fe56a3e45389012e7af',
          quota:  1
        }
      ] ,Validators.compose([Validators.required])],
      total_quota: [25 ,Validators.compose([Validators.required])],
      platform: ['Youtube' ,Validators.compose([Validators.required])],
      discount: [0.1 ,Validators.compose([Validators.required])],
      items_exceeding: [0 ,Validators.compose([Validators.required])],
      exp_date: ["2020-05-19T15:36:05.635Z" ,Validators.compose([Validators.required])],
    })

    console.log(this.addPromo.value)
    this.voucherService.createVoucher(this.addPromo.value).subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )

    // set productList to the form control containing propeties
    this.productList = this.addPromo.get('products') as FormArray;
  }

  // Generate new product
  createProduct(): FormGroup {
    return this.formBuilder.group({
      productname: [null, Validators.compose([Validators.required])],
    });
  }

  addProduct() {
  this.productList.push(this.createProduct());
  }

  removeProduct(index) {
    this.productList.removeAt(index);
  }

  getProductFormGroup(index): FormGroup {
    const formGroup = this.productList.controls[index] as FormGroup;
    return formGroup;
  }



  dismiss(){
    this.modalController.dismiss({
      'dismissed': true
    })
  }

  /*
    products
  */

}

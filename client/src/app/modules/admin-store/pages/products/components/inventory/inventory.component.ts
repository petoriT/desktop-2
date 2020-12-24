import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  AfterViewInit,
  OnChanges,
  Input,
  SimpleChanges,
  OnDestroy,
} from "@angular/core";
import { ProductFacadeService } from "src/app/core-modules/services/products/product-facade/product-facade.service";
import { CategoryFacadeService } from "src/app/core-modules/services/categories/category-facade/category-facade.service";
import { LoadingController } from "@ionic/angular";
import {
  FormGroup,
  FormArray,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
import { browserRefresh } from "src/app/app.component";
import { distinctUntilChanged } from "rxjs/operators";
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: "app-inventory",
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.scss"],
})
export class InventoryComponent implements OnInit, OnChanges, AfterViewInit {
  edit;
  clickButton;
  active_expansion;
  no_product
  @Output() shareProduct = new EventEmitter();
  @Output() segment = new EventEmitter();

  //FormState
  updateProduct: FormGroup;
  status;
  id;

  @Input() inventory_products;

  //observables
  products$;
  categories$;
  isUpdating$;
  device_screen; 
  detail_view_product;
  constructor(
    private userFacade: UserFacadeService,
    private productFacade: ProductFacadeService,
    private categoryFacade: CategoryFacadeService,
    public loadingController: LoadingController,
    private formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver,
  ) {
    
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      if (result.matches) {
        this.device_screen = "Handset"
      }
    });
    breakpointObserver.observe([
      Breakpoints.Tablet
    ]).subscribe(result => {
      if (result.matches) {
        this.device_screen = "Tablet"
      }
    });

    breakpointObserver.observe([
      Breakpoints.Web
    ]).subscribe(result => {
      if (result.matches) {
        this.device_screen = "Web"
      }
    });
   }

  ngOnChanges(changes: SimpleChanges) {

    this.products$ = this.inventory_products.pipe(distinctUntilChanged());

  }

  ngOnInit() {
    //getCategories
    this.categories$ = this.categoryFacade.getCategories$();

    //getproducts
    setTimeout(() => {
      this.products$.subscribe(
        (res) => {
          if (res == []) {
            if (res == undefined || res.length < 1) {
              this.no_product = true;
            }
          }
        },
        (err) => {
          console.log(err);
        }
      );
    }, 5000);

    //form
    this.updateProduct = this.formBuilder.group({
      product_id: new FormControl(),
      production_status: new FormControl(),
      next_available_date: new FormControl(),
      productName: new FormControl(),
      selectCategory: new FormControl(),
      productDescription: new FormControl(),
      productImage: new FormControl(),
      metaTags: new FormControl(), //this.formBuilder.array([this.createMetaTag()]),
      productPrice: new FormControl(),
      in_stock: new FormControl(),
      sold: new FormControl(),
    });
  }

  ngAfterViewInit() { }

  expanded(p) {
    let product = { ...p };
    console.log(product);
    // Patch the values to html
    if (this.id == product._id) {
      return null;
    } else {
      this.id = product._id;
      this.updateProduct.patchValue({
        product_id: product._id,
        productName: product.productName,
        selectCategory: product.category,
        productDescription: product.productDescription,
        productImage: product.productImage,
        metaTags: product.metaTags,
        productPrice: product.productPrice,
        production_status: product.production_status,
        next_available_date: product.next_available_date,
        in_stock: product.in_stock,
        sold: product.sold,
      });
    }
  }

  update() {
    let store = this.userFacade.getCurrentStore();
    this.edit = false;
    let product = this.updateProduct.value;
    product._id = product.product_id;
    this.productFacade.updateProduct({ product: product, store_id: store._id });
    this.clickButton = true;
  }

  editProduct() {
    this.edit = true;
    this.clickButton = true;
  }

  sendToParent() {
    this.segment.emit("add_product");
  }

  // present loading
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Please wait...",
      duration: 500,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }
  setDesktopProductView(product){
    this.edit = true;
    this.detail_view_product = product
  }
}

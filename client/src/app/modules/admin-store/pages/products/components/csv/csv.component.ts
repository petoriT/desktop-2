import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Papa } from "ngx-papaparse";
//import { File } from '@ionic-native/file/ngx';
import { ProductApiService } from "src/app/core-modules/services/products/product-api/product-api.service";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";

@Component({
  selector: "app-csv",
  templateUrl: "./csv.component.html",
  styleUrls: ["./csv.component.scss"],
})
export class CsvComponent implements OnInit {
  jsonData: any[] = [];
  csvData: any[] = [];
  headerRow: any[] = [];

  uploaded: boolean = false;
  localUrl;
  ProductReady: boolean;
  allowed = false;
  constructor(
    private http: HttpClient,
    private papa: Papa,
    //private file: File,
    private productApi: ProductApiService,
    private userFacade: UserFacadeService
  ) { }

  ngOnInit() {

  }

  handleFileInput(event) {
    this.uploaded = true;
    let file = event.target.files[0];
    this.extractData(file);
  }

  extractData(data) {
    let csvData = data || "";
    this.papa.parse(csvData, {
      complete: (parseData) => {
        this.headerRow = parseData.data.splice(0, 1)[0];
        this.csvData = parseData.data;
      },
    });
  }

  saveProducts() {
    let store = this.userFacade.getCurrentStore();
    this.productApi
      .createBulkProducts({ csv: this.csvData, store_id: store._id })
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
  }

  loadProducts() {
    let store = this.userFacade.getCurrentStore();
    this.productApi.getStoreProductsById(store._id).subscribe(
      (res) => {
        this.jsonData = res.products;
        if (this.jsonData) {
          this.ProductReady = true;
          this.headerRow = Object.keys(this.jsonData[0]);
        }
      },
      (err) => console.log(err)
    );
  }

  exportCSV() {
    if (this.allowed) {
      let csv = this.papa.unparse({
        fields: this.headerRow,
        data: this.jsonData,
      });
      // desktop download
      var blob = new Blob([csv]);
      var a = window.document.createElement("a");
      a.href = window.URL.createObjectURL(blob);
      a.download = "Cartalist_products.csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      console.log("buy lisence");
    }
  }
}

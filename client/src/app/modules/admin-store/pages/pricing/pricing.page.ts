import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ProfileApiService } from "src/app/core-modules/services/profile/profile-api/profile-api.service";
import { Md5 } from "ts-md5/dist/md5";
import { IonSlides } from "@ionic/angular";
import { AuthStateService } from "src/app/core-modules/services/auth/auth-state/auth-state.service";
import { PayfastFacadeService } from "src/app/core-modules/services/payments/payfast-facade/payfast-facade.service";
import { Location } from "@angular/common";
import { PickerController } from "@ionic/angular";
import { PickerOptions } from "src/app/models/picker-model";
import {ToastService} from "src/app/core-modules/services/toast/toast.service";
import { UserFacadeService } from 'src/app/core-modules/services/profile/profile-facade/profile-facade.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';


@Component({
  selector: "app-pricing",
  templateUrl: "./pricing.page.html",
  styleUrls: ["./pricing.page.scss"],
})
export class PricingPage implements OnInit {

  @ViewChild("userSlides") slides: IonSlides;
  //Vars
  payfastForm = {};
  md5 = new Md5();
  number_products ;
  number_users;
  license_focus ;
  billing_cycle_selected;
  showBack;
  slides_number;
  licenses;
  other_licenses;
  device_screen
  current_store;
  paynow = false
  show_licenses;
  recommended_license_index:any = [];
  selected_license;
  //Form
  pricingForm = new FormGroup({
    products_number: new FormControl(""),
  });

  constructor(
    private toastService: ToastService,
    private userApi: ProfileApiService,
    private payFacade: PayfastFacadeService,
    private _location: Location,
    private userFacade: UserFacadeService,
    private authState: AuthStateService,
    private pickerCtrl: PickerController,
    public alertController: AlertController,
    private router: Router,
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

  ionViewDidEnter() {
    this.slides.lockSwipes(true);
  }
  ngOnInit() {
    this.showBack = false;
    this.current_store = this.userFacade.getCurrentStore();
    this.authState.getPremadeLicenses().subscribe(
      (res) => {
        this.licenses =res
      },
      (err) => {
        console.log(err);
      }
    );
  
    this.show_licenses = false; 
  }
  
  //Lisence is selected and assigned
  postLicense(license){
    let store = this.userFacade.getCurrentStore();

    license.store_id = store._id

    let today_ms =  Date.now()
    let one_day_ms = 86400000

    let one_month_ms = one_day_ms * 30
    let one_year_ms = one_day_ms * 30 * 12

    let month_end_period = today_ms + one_month_ms
    let year_end_period = today_ms + one_year_ms

    if( this.billing_cycle_selected =="yearly" ){
      license.payed_amount = {amount: license.annual_price , type: "Yearly", end_date: year_end_period }
    }else{
      license.payed_amount = {amount: license.monthly_price , type: "Monthly", end_date: month_end_period}
    }
    
    //assign license
    this.selected_license = license

    
    if(this.billing_cycle_selected == "yearly" && this.license_focus == license.license_name){
      this.presentAlertConfirmYearly()
    }else if(this.billing_cycle_selected == "mon" && this.license_focus == license.license_name){
      this.presentAlertConfirmMonth()
    }else{
      this.presentAlertConfirmMonth()
      this.billing_cycle_selected = "mon"
    }
    
  }

  
  //Send form to payfast
  onSub(info) {
    let license = this.selected_license;  
    this.payFacade.temporaryOrder(info, license);
  }
  

  payfastNav(){
    this.userApi.getUser().subscribe(
      (res) => {
        
        this.router.navigate(["payment"], {
          state: {
            user_email: res.user.email,
            selected_license: this.selected_license,
            billing_cycle_selected: this.billing_cycle_selected } 
        });
      }, err => {
        console.log(err)
      })
    
  }

  randomize() {
    // Randomize chars
    let length = 10;
    let chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = "";
    for (var i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }
  backClicked() {
    this._location.back();
  }
  next() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
    window.scroll(0, 0);
   
  }
  back() {
    this.slides.lockSwipes(false);

    this.slides.slidePrev();
    this.slides.lockSwipes(true);
  }

  async showBasicPicker(slides) {
   // this.slides = slides
    let opts: PickerOptions = {
      buttons: [
        {
          text: "cancel",
          role: "cancel",
        },
        {
          text: "done",
        },
      ],
      columns: [
        {
          name: "products",
          options: [
            { text: "No Products", value: "default" },
            { text: "0 - 5", value: "5" },
            { text: "5 - 25", value: "25" },
            { text: "25 - 50", value: "50" },
            { text: "50 - 75", value: "75" },
            { text: "75 - 500", value: "500" },
            { text: "500 - 2500", value: "2500" },
            { text: "2500 - 5000", value: "5000" },
            { text: "unlimited", value: "unlimited" },
          ],
        },
        {
          name: "users",
          options: [
            { text: "No Users", value: "default" },
            { text: "1", value: "1" },
            { text: "2", value: "2" },
            { text: "2 - 5", value: "5" },
            { text: "5 - 20", value: "20" },
            { text: "20 - 40", value: "40" },
            { text: "40 - 100", value: "100" },
            { text: "100 - 200", value: "200" },
            { text: "unlimited", value: "unlimited" },
         
          ],
        },
      ],

    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();

    picker.onDidDismiss().then(async (data) => {
      let col = await picker.getColumn("products");
      let col1 = await picker.getColumn("users");
      this.number_products = col.options[col.selectedIndex].value;
      this.number_users = col1.options[col1.selectedIndex].value;
      console.log(this.number_products, this.number_users);
      if(this.number_products == 'default'){
        this.toastService.presentToast("select Your Number of Products")
      }else if(this.number_users=="default"){
        this.toastService.presentToast("select your Number of Users")
      }else{
        this.next();
      
        this.outPutLicense();
        this.show_licenses = true;
        this.toastService.presentToast("Slide to see other licenses")
        this.license_focus = this.recommended_license_index[0].license_name
        setTimeout(() => {
          this.license_focus ="none"
          this.toastService.presentToast("Select billing cycle by pressing /mon or /Year")
        }, 3000);
      }
    
    });
  }
  outPutLicense(){
  let y;
  this.recommended_license_index =  this.licenses.filter(
    license => {
      return license.number_of_products == this.number_products  || license.number_of_users == this.number_users
    }
  
    )

y = this.licenses.filter(
  license =>{
 
    return license !== this.recommended_license_index[0] //|| license !== this.recommended_license_index[1]
  } 
)

if( this.recommended_license_index.length > 1){
  this.other_licenses = y.filter(
    license =>{
   
      return license !== this.recommended_license_index[1]
    } 
  )
}else{
  this.other_licenses = y
}

console.log(this.other_licenses)
console.log(this.recommended_license_index)
   //for (let index = 0; index < this.licenses.length; index++) {
    // if(this.number_products == this.licenses[index].number_of_products || this.number_users == this.licenses[index].number_of_users){
      // this.recommended_license_index.push(this.licenses[index])
        //y.push(index)
    // }
     
  // } 
   
   //for( let x = 0; x < y.length; x++){
    // this.licenses.splice(y[x],1)
   
  // }


  }
  
  slideChange(event) {
    this.slides.getActiveIndex().then((data) => {
      this.slides_number = data + 1;
    
      if ( this.slides_number == 1) {
        this.showBack = false;
      } else if( this.slides_number > 1){
        this.showBack = true;
      }
    });

  }
  async presentAlertConfirmMonth() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm Billing Cycle!',
      message: 'You have Chosen to pay Monthly',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.paynow = true
           this.slides.lockSwipes(false);
            this.slides.slideNext();
            this.slides.lockSwipes(true);
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlertConfirmYearly() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm Billing Cycle!',
      message: 'You have Chosen to pay Per Year',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.paynow = true
            this.slides.lockSwipes(false);
            this.slides.slideNext();
            this.slides.lockSwipes(true);
          }
        }
      ]
    });

    await alert.present();
  }

  showAnnual(license_name,data){
  this.license_focus = license_name
  this.  billing_cycle_selected = data
  }
 
}

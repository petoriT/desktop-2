import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Camera } from "@ionic-native/camera/ngx";
import { File } from "@ionic-native/file/ngx";

import { HTTP } from "@ionic-native/http/ngx";
import { environment } from "../environments/environment";

import {
  CloudinaryModule,
  CloudinaryConfiguration,
} from "@cloudinary/angular-5.x";
import * as Cloudinary from "cloudinary-core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ChartistModule } from "ng-chartist";

//native

//Import Modules and include them
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptorService } from "./core-modules/interceptors/auth/token-interceptor.service";
import { LayoutPageModule } from "./modules/admin-store/layout/layout.module";
import { LandingPageModule } from "./modules/user/landing/landing.module";
import { PaymentPageModule } from "./modules/payments/payment/payment.module";
import { LayoutAuthPageModule } from "./modules/auth/layout/layout.module";
import { MenusModule } from "./modules/menus/menus.module";

import { MatGoogleMapsAutocompleteModule } from "@angular-material-extensions/google-maps-autocomplete";
import { AgmCoreModule } from "@agm/core";

// 1. Import the libs you need
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AngularFireModule } from '@angular/fire';
//angular firebase 2
/*import { AngularFireStorageModule } from 'angularfire2/storage';*/

const config = {
  apiKey: "AIzaSyB3wgxnszyXMXfbRyZlGa6Xgwemq7JTKVg",
  authDomain: "cartalist-20.firebaseapp.com",
  databaseURL: "https://cartalist-20.firebaseio.com",
  projectId: "cartalist-20",
  storageBucket: "cartalist-20.appspot.com",
  messagingSenderId: "1080994665787",
  appId: "1:1080994665787:web:e51dcae7d8cdd6405f931e",
  measurementId: "G-FPKKRHBEKF"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutPageModule,
    LandingPageModule,
    PaymentPageModule,
    MenusModule,
    LayoutAuthPageModule,
    //Cloudinary config
    CloudinaryModule.forRoot(Cloudinary, {
      cloud_name: "dzrx9mvzy",
    } as CloudinaryConfiguration),
    //Google Api
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAI647cGJH9BcHwgiTqDvbU1C6VDzQNKVk",
      libraries: ["places"],
    }),
    MatGoogleMapsAutocompleteModule,
    ChartistModule,
    // 3. Initialize
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    File,
    FileTransfer,
    FileTransferObject,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    HTTP,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

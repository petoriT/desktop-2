import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  async presentToast(data) {
    const toast = await this.toastController.create({
      message: data,
      duration: 2000,
      position: "bottom",
    });
    toast.present();
  }

}

import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from "@angular/core";
import { UserFacadeService } from "src/app/core-modules/services/profile/profile-facade/profile-facade.service";
import {
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import { distinctUntilChanged } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Component({
  selector: "app-admin-users",
  templateUrl: "./admin-users.component.html",
  styleUrls: ["./admin-users.component.scss"],
})
export class AdminUsersComponent implements OnInit, OnChanges {
  @Output() segment = new EventEmitter();
  public no_user;
  public users;
  @Input() users$
  public store;
  updateUser: FormGroup;
  modules;
  email;
  edit;
  constructor(
    private userFacade: UserFacadeService,
    private formBuilder: FormBuilder,

    public toastController: ToastController
  ) { }

  ngOnChanges() {
    this.users = this.users$
  }

  ngOnInit() {
    this.no_user = false;
    // this.users = this.userFacade.getCurrentStore().users;

    //initiATE FORM
    this.updateUser = this.formBuilder.group({
      //create instances of form-control
      email: [""],
      user_type: [""],
      role: [""],
    });
  }

  expanded(v) {
    let user = { ...v };
    if (this.email == user.email) {
      return null;
    } else {
      this.email = user.email;
      this.modules = user.module_access;
      this.updateUser.patchValue({
        email: user.email,
        user_type: user.user_type,
        role: user.role,
      });
    }

    console.log(this.modules);
  }

  onChange(event) {
    this.modules = event.detail.value;
  }

  deleteModule(data) {
    let modules = this.modules.filter((module) => {
      return module !== data;
    });
    this.modules = modules;
  }

  editUser(admin) {
    //this.clickButton = true;
    if (admin.user_type == "Main") {
      this.presentToast("You cannot modify main user")
      this.edit = false;
    } else {
      this.edit = true;
    }
  }

  update(admin) {
    let store = this.userFacade.getCurrentStore();
    this.edit = false;
    let user = { ...this.updateUser.value, module_access: this.modules };
    //update current and database
    let other_users = this.users.filter((fs) => {
      return fs.email !== user.email;
    });
    let users = [...other_users, user]; //update on index
    this.users = users;
    //update database
    let data = {
      store_id: store._id,
      users: users
    }
    this.userFacade.updateAdmin(data);
  }

  onDelete(admin) {
    //remove from state

    let data = this.users.filter((user) => {
      return user !== admin;
    });
    if (admin.user_type == "Main") {
      this.presentToast("You cannot delete main user")
    } else {
      this.users = data;
      //this.userFacade.store;
      this.userFacade.removeAdmin(admin);
    }

  }

  changeSegment(data) {
    this.segment.emit(data);
    console.log(data);
  }

  async presentToast(data) {
    const toast = await this.toastController.create({
      message: data,
      duration: 2000,
      position: "bottom",
    });
    toast.present();
  }
}

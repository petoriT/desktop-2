import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-widgetsnav',
  templateUrl: './widgetsnav.component.html',
  styleUrls: ['./widgetsnav.component.scss'],
})
export class WidgetsnavComponent implements OnInit {
  @Output() selected = new EventEmitter();
  name: string;
  showExpB:boolean=true;
  message: string;
  constructor(private data: DataService) { }

  ngOnInit() {
  }

  user(){
    this.selected.emit("users")
  }
  sales(){
    this.selected.emit("sales")
  }
  showExp(){
this.showExpB=false;
  }
  showExpAgain(){
    this.showExpB=true;
  }
}

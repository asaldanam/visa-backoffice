import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { LocationService } from '../../../services/location.service';

@Component({
  selector: 'app-m-neworder-exit',
  templateUrl: './m-neworder-exit.component.html'
})
export class MNeworderExitComponent implements OnInit {

  // @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    public _location:LocationService
  ) { }

  ngOnInit() { }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
    console.log('close');
  }

}

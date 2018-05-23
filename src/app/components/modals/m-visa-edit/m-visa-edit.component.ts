import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { AgencyConfigService } from '../../../services/agency-config.service';

@Component({
  selector: 'app-m-visa-edit',
  templateUrl: './m-visa-edit.component.html'
})
export class MVisaEditComponent implements OnInit {

  // @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    public _agencyConfig: AgencyConfigService
  ) { }

  ngOnInit() {
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}

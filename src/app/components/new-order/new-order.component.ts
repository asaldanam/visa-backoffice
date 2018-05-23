import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { AgencyConfigService } from '../../services/agency-config.service';
import { TablesService } from '../../services/tables.service';
import { ModalsService } from '../../services/modals.service';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.sass'],
  providers : [TablesService, ModalsService]
})
export class NewOrderComponent implements OnInit {

  loaded:boolean = false;
  destination = '...';
  departure:boolean = false;

  constructor(
    public _agencyConfig: AgencyConfigService,
    public _tables: TablesService,
    public _modals: ModalsService,
    public _location: LocationService
  ) { }

  getDestination() {
    return this.destination;
  }

  ngOnInit() {
    setTimeout(
      ()=> {this.loaded = true;}, 500
    );
  }

}

import { Component, OnInit } from '@angular/core';

import { AgencyConfigService } from '../../services/agency-config.service';
import { TablesService } from '../../services/tables.service';
import { ModalsService } from '../../services/modals.service';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-new-order-breakdown',
  templateUrl: './new-order-breakdown.component.html',
  styleUrls: ['./new-order-breakdown.component.sass'],
  providers : [TablesService, ModalsService]
})
export class NewOrderBreakdownComponent implements OnInit {

  loaded:boolean = false;

  constructor(
    public _agencyConfig: AgencyConfigService,
    public _tables: TablesService,
    public _modals: ModalsService,
    public _location: LocationService
  ) { }

  ngOnInit() {
    setTimeout(
      ()=> {this.loaded = true;}, 500
    );
  }

}

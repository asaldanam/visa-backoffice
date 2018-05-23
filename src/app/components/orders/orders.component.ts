import { Component, OnInit } from '@angular/core';

import { AgencyConfigService } from '../../services/agency-config.service';
import { TablesService } from '../../services/tables.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass'],
  providers : [TablesService]
})
export class OrdersComponent implements OnInit {

  loaded:boolean = false;

  constructor(
    public _agencyConfig: AgencyConfigService,
    public _tables: TablesService
  ) { }

  ngOnInit() {
    setTimeout(
      ()=> {this.loaded = true;}, 1000
    );
    this._tables.tableHeader = "date";
    this._tables.tableHeaderSort = true;
  }

}

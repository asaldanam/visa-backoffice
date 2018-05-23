import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { FilterService } from '../../../services/filter.service';
import { AgencyConfigService } from '../../../services/agency-config.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass'],
  providers : [FilterService]
})
export class FilterComponent implements OnInit {

  modalCountry:boolean = false;
  modalDate:boolean = false;
  modalStatus:boolean = false;

  constructor(
    public _filter: FilterService,
    public _agencyConfig: AgencyConfigService
  ) { }

  ngOnInit() {
  }

  filterValue(value, status, text){
    if (status === true) {
      return value;
    }
    else {
      return text
    };
  }

  setFilterCountry(type) {
    if (type == 'apply') {
      this._filter.filter.country.selected = true;
      this.modalCountry = false;
      this.modalDate = false;
      this.modalStatus = false;
    };
    if (type == 'edit') {
      this.modalCountry = !this.modalCountry;
      this.modalDate = false;
      this.modalStatus = false;
    };
    if (type == 'delete') {
      this._filter.filter.country.selected = false;
    };
  }

  setFilterDate(type) {
    if (type == 'apply') {
      this._filter.filter.date.selected = true;
      this.modalCountry = false;
      this.modalDate = false;
      this.modalStatus = false;
    };
    if (type == 'edit') {
      this.modalCountry = false;
      this.modalDate = !this.modalDate;
      this.modalStatus = false;
    };
    if (type == 'delete') {
      this._filter.filter.date.selected = false;
    };
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AgencyConfigService } from '../../../services/agency-config.service';

import 'rxjs/add/operator/filter'


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  title: string;
  navMenu: boolean = false;
  router: any;

  constructor(
    _router:Router,
    route:ActivatedRoute,
    public _agencyConfig: AgencyConfigService
  ) {

    this.router = _router;

    _router.events
      .filter(e => e instanceof NavigationEnd)
      .forEach(e => {
        this.title = route.root.firstChild.snapshot.data['title'];
      });
  }

  showNavMenu() {
    this.navMenu = !this.navMenu;
  }

  agencyColor(classType, urlPath) {
    let classStyle;
    if (this.router.url == urlPath) {
      return this._agencyConfig.userFrom + classType;
    }
    return;
  }

  ngOnInit() {
    console.log(this.router); //  /routename
  }

}

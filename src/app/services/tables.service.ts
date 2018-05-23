import { Injectable } from '@angular/core';

@Injectable()
export class TablesService {

  orders:any = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  loaded:boolean = true;

  tableActions:string = "hide";
  tableHeader:string = "";
  tableHeaderSort:boolean = false;  

  tableActionsDisplay(actionsDisplay) {
    this.tableActions = actionsDisplay;
  }

  nextPage() {
    this.loaded = false;
    setTimeout(
      ()=> {
        this.orders.push(1,1,1,1,1,1,1,1,1,1,);  
        this.loaded = true;
        setTimeout(
          ()=> {window.scrollTo({top: window.scrollY + 10000000, left: 0, behavior: 'smooth'});}, 150
        );
      }, 500
    );
  }

  tableSort(element, event) {
    let sort = event.srcElement.className;
    this.tableHeader = element;
    if (sort == 'exp-table-title' || sort == 'exp-table-title active up') {
      this.tableHeaderSort = true;
    }
    if (sort == 'exp-table-title active down') {
      this.tableHeaderSort = false
    }

  }

}

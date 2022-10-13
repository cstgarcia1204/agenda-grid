import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import CLIENTCOLUMNS from '../app/clientData.json';  
import COLUMNDEFS from '../app/colDef.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directory';
  
  // Each Column Definition results in one Column.
  colDefs = COLUMNDEFS;
  rowData = CLIENTCOLUMNS;
  // DefaultColDef sets props common to all Columns
  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  @ViewChild('myGrid') grid!: AgGridAngular;

  // onGridReady(params: GridReadyEvent) {
  // }
  

 
  

  

  // onCellClicked( e: CellClickedEvent): void {
  //   console.log('cellClicked', e);
  // }
   
}

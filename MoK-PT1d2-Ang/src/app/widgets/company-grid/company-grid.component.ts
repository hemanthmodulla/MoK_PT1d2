import { Component, OnInit, EventEmitter } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { GridsterConfig, GridsterItem, DisplayGrid } from 'angular-gridster2';
import { User } from 'src/app/models/user.model';
import { TextboxComponent } from '../textbox/textbox.component';
import { Textbox } from 'src/app/models/textbox.model';
import {HttpClient} from '@angular/common/http';
import { Widget } from 'src/app/models/widget.model';
import { WidgetToList } from 'src/app/models/widget-to-list.model';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { ImageComponent } from '../image/image.component';
import { KendoComponent } from '../kendo/kendo.component';

@Component({
  selector: 'app-company-grid',
  templateUrl: './company-grid.component.html',
  styleUrls: ['./company-grid.component.scss']
})
export class CompanyGridComponent implements OnInit {

  constructor(private dashboardService: DashboardService, private http: HttpClient) { }
  public options: GridsterConfig;
  public dashboard: Array<GridsterItem>;
  private resizeEvent: EventEmitter<any> = new EventEmitter<any>();
  private configureEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  public showConfig = false;
  readonly rootUrl = 'http://localhost:5000/api/';
  widgetVal: any = [];
  public inputs = {
    widget: '',
    resizeEvent: this.resizeEvent,
    configureEvent: this.configureEvent

  };
  public outputs = {
    onSomething: (type) => alert(type)
  };
  isDataAvailable: boolean = false;
  ngOnInit() {
    localStorage.clear();
    this.dashboardService.loadDashBoards().then(() => {
    this.isDataAvailable = true;
    this.options = this.dashboardService.getDashBoardOptions();
    this.options.displayGrid = DisplayGrid.OnDragAndResize;
    this.options.itemChangeCallback = (item) => {
      // update DB with new size
      // send the update to widgets
      this.resizeEvent.emit(item);
    };
    this.options.itemResizeCallback = (item) => {
      // update DB with new size
      // send the update to widgets
      this.resizeEvent.emit(item);
    };
    const user = new User();
    user.Id = '123';
    this.dashboard = this.dashboardService.getUserDashBoards(user).widgets;
    // tslint:disable-next-line: radix
    this.dashboardService.idVal = parseInt(this.dashboard[this.dashboard.length - 1].id);});
  }
  changedOptions() {
    this.options.api.optionsChanged();
  }

  public onClick_removeItem($event, item): void {
   $event.preventDefault();
   $event.stopPropagation();
   this.dashboardService.IDModelDictionary.delete(item.id);
   this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  onClick_configureItem($event, item): void {
   $event.preventDefault();
   $event.stopPropagation();
   this.showConfig = !this.showConfig;
   this.configureEvent.emit(this.showConfig);
  }

  public onClick_LoadUserDashboard1(): void {
   const user = new User();
   user.Id = '123';
   this.dashboard = this.dashboardService.getUserDashBoards(user).widgets;
 }

  public onClick_AddNominationListWidget(): void {
    this.dashboardService.idVal = this.dashboardService.idVal + 1;
    this.dashboardService.IDModelDictionary.set(this.dashboardService.idVal.toString(), this.dashboardService.textboxval);
    this.dashboard.push({
     id: this.dashboardService.idVal.toString(),
     name: 'Nomination List',
     componentName: 'kendo-widget',
     componentType: KendoComponent,
     cols: 2,
     rows: 1,
     y: 0,
     x: 0,
     model: this.dashboardService.textboxval,

   });

 }

 public onClick_AddImage(): void {
  this.dashboardService.idVal = this.dashboardService.idVal + 1;
  this.dashboardService.IDModelDictionary.set(this.dashboardService.idVal.toString(), '');
  this.dashboard.push({
    id: this.dashboardService.idVal.toString(),
    name: 'Image Comp',
    componentName: 'Image',
    componentType: ImageComponent,
    cols: 2,
    rows: 1,
    y: 0,
    x: 0,
    model:  '',
  });

}

public onClick_AddCheckbox(): void {
  this.dashboardService.idVal = this.dashboardService.idVal + 1;
  this.dashboardService.IDModelDictionary.set(this.dashboardService.idVal.toString(), this.dashboardService.textboxval);
  this.dashboard.push({
    id: this.dashboardService.idVal.toString(),
    name: 'Check Box',
    componentName: 'checkbox',
    componentType: CheckboxComponent,
    cols: 2,
    rows: 1,
    y: 0,
    x: 0,
    model:  '',
  });

}

public onClick_AddTextBox(): void {
  this.dashboardService.idVal = this.dashboardService.idVal + 1;
  this.dashboardService.IDModelDictionary.set(this.dashboardService.idVal.toString(), this.dashboardService.textboxval);
  this.dashboard.push({
   id: this.dashboardService.idVal.toString(),
   name: 'Text Box',
   componentName: 'Text-Box',
   componentType: TextboxComponent,
   cols: 2,
   rows: 1,
   y: 0,
   x: 0,
   model: this.dashboardService.textboxval,

 });

}

 public onClick_SaveUserDashboardsToLocalStorage(): void {
  const user = new User();
  if (localStorage.getItem('dictionary1') ) {
    localStorage.removeItem( 'dictionary1');
   }
  user.Id = '123';
  this.dashboardService.saveUserDashBoards(user);
  const jsonObject = {};

  this.dashboardService.IDModelDictionary.forEach((value, key) => {
      jsonObject[key] = value;
      console.log(this.dashboardService.IDModelDictionary);
  });

  localStorage.setItem('dictionary1', JSON.stringify(jsonObject));
 }

}


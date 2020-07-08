import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Dashboard } from '../models/dashboard.model';
import { DashboardOptions } from '../models/dashboard-options.model';
import { Widget } from '../models/widget.model';
import { GridType, CompactType } from 'angular-gridster2';
import { Textbox } from '../models/textbox.model';
import { TextboxComponent } from '../widgets/textbox/textbox.component';
import { WidgetToList } from '../models/widget-to-list.model';
import { HttpClient } from '@angular/common/http';
import { CheckboxComponent } from '../widgets/checkbox/checkbox.component';
import { ImageComponent } from '../widgets/image/image.component';

interface IDashboardService {
  getUserDashBoards(user: User): Array<Dashboard>;
  saveUserDashBoards(user: User): void;
  getDashBoardOptions(): DashboardOptions;
}
@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  private userDashboards: Map<string, Dashboard> = new Map<string, Dashboard>();
  IDModelDictionary = new Map<string, any>();
  public idVal = 0;
  readonly rootUrl = 'http://localhost:5000/api/';
  private defaultUser: User;
  public currentdashboard = new Dashboard();
  public dahboardFromSave = new Dashboard ();

  textboxval = '';
  kendocount = 0;
  constructor(private http: HttpClient) {
     //this.loadDashBoards();
   }

   public loadDashBoards(): Promise<void | Widget[]> {
     this.defaultUser = new User();
     this.defaultUser.Id = '123';
     localStorage.clear();
    //  if (localStorage.getItem('dictionary1') ) {
    //     const jsonObject2 = JSON.parse(localStorage.getItem('dictionary1'));
    //     const map = new Map<string, string>();
    //     // tslint:disable-next-line: forin
    //     for (const value in jsonObject2) {
    //         map.set(value, jsonObject2[value]);
    //     }
    //     this.IDModelDictionary = map;
    //   }
     const dashBoards = new Dashboard();
     dashBoards.id = '1';
     dashBoards.name = 'dashboard-1';
     dashBoards.user = this.defaultUser;
     dashBoards.widgets = new Array<Widget>();
     return (this.http.get<Widget[]>('http://localhost:5000/api/Widget', {
        params: {
          id: this.defaultUser.Id,
        },
      }).toPromise().then(x => {
        dashBoards.widgets = x;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < dashBoards.widgets.length; i++) {
          this.IDModelDictionary.set(dashBoards.widgets[i].id, dashBoards.widgets[i].model);
        }
        this.currentdashboard = dashBoards;
        dashBoards.widgets.forEach((widget: Widget) => {
          if (widget.componentName === 'kendo-widget') {
            widget.componentType = ImageComponent;
            this.idVal = Number(widget.id);
          }
          if (widget.componentName === 'Text-Box') {
            widget.componentType = TextboxComponent;
            this.idVal = Number(widget.id);
          }
          if (widget.componentName === 'Image') {
            widget.componentType = ImageComponent;
            this.idVal = Number(widget.id);
          }
          if (widget.componentName === 'checkbox') {
            widget.componentType = CheckboxComponent;
            this.idVal = Number(widget.id);
          }
      });
        this.userDashboards.set(this.defaultUser.Id, dashBoards);
      }));

      // const savdDashboards = localStorage.getItem(this.defaultUser.id);
      // this.http.get(this.rootUrl + 'widget').subscribe(data => {});
      // const dashboards = JSON.parse(savdDashboards) as Dashboard;

  }

  public getUserDashBoards(user: User): Dashboard {
    return this.userDashboards.get(user.Id);
  }

  public startEditMode(widgetid: string){
   console.log(this.userDashboards.get(this.defaultUser.Id));
  }

  public saveUserDashBoards(user: User): void {
    // localStorage.setItem(user.id, JSON.stringify(this.userDashboards.get(user.id)));

    // used to save widgets[] to database
    this.dahboardFromSave = this.userDashboards.get(user.Id);
    const du = new WidgetToList(this.dahboardFromSave.widgets[0], user.Id );


    const dataToSave = this.dahboardFromSave.widgets.map(item => new WidgetToList(item, user.Id ));
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < dataToSave.length; i++) {
      this.IDModelDictionary.forEach((value, key) => {
        if ( dataToSave[i].id.toString() === key.toString()) {
          dataToSave[i].model = value;
        }

        // this.dashboardService.updateModel(user.id,key,value);
    });

    }

    this.http.post('http://localhost:5000/api' + '/Widget', dataToSave, { observe: 'response' }).subscribe();
  }

  // public updateModel(userid: string, widgetid:string, modelinfo: string){
  //   let completeModel: ModelInfo;
  //   completeModel = new ModelInfo();
  //   console.log(userid);
  //   console.log(widgetid);
  //   console.log(modelinfo);
  //   completeModel.userID = userid;
  //   completeModel.widgetID = widgetid;
  //   completeModel.modelInfo = modelinfo;
  //   console.log('update model');
  //   console.log(completeModel);

  //   this.http.put('http://localhost:5000/api/Widget/1', completeModel)
  // }

  public getDashBoardOptions(): DashboardOptions {
    return {
      gridType: GridType.ScrollVertical,
      compactType: CompactType.None,
      margin: 5,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      mobileBreakpoint: 640,
      minCols: 1,
      maxCols: 30,
      minRows: 1,
      maxRows: 500,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 1000,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      setGridSize: false,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        delayStart: 0,
        enabled: true,
        ignoreContentClass: 'gridster-item-content',
        ignoreContent: true,
        dragHandleClass: 'drag-handler',
        dropOverItems: false
      },
      resizable: {
        enabled: true,
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: {north: true, east: true, south: true, west: true},
      pushResizeItems: false,
      displayGrid() {},
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false,
      itemChangeCallback() {},
      itemResizeCallback() {}
     };
  }
}

export class DashboardOptions {
    gridType: any;
    compactType: any;
    margin: number;
    outerMargin: boolean;
    outerMarginTop: null;
    outerMarginRight: null;
    outerMarginBottom: null;
    outerMarginLeft: null;
    mobileBreakpoint: number;
    minCols: number;
    maxCols: number;
    minRows: number;
    maxRows: number;
    maxItemCols: number;
    minItemCols: number;
    maxItemRows: number;
    minItemRows: number;
    maxItemArea: number;
    minItemArea: number;
    defaultItemCols: number;
    defaultItemRows: number;
    fixedColWidth: number;
    fixedRowHeight: number;
    keepFixedHeightInMobile: boolean;
    keepFixedWidthInMobile: boolean;
    scrollSensitivity: number;
    scrollSpeed: number;
    setGridSize?: boolean;
    enableEmptyCellClick: boolean;
    enableEmptyCellContextMenu: boolean;
    enableEmptyCellDrop: boolean;
    enableEmptyCellDrag: boolean;
    emptyCellDragMaxCols: number;
    emptyCellDragMaxRows: number;
    ignoreMarginInRow: boolean;
    draggable: any;
    resizable: {
      enabled: boolean
    };
    swap: boolean;
    pushItems: boolean;
    disablePushOnDrag: boolean;
    disablePushOnResize: boolean;
    pushDirections: { north: true, east: true, south: true, west: true };
    pushResizeItems: boolean;
    displayGrid: any;
    disableWindowResize: boolean;
    disableWarnings: boolean;
    scrollToNewItems: boolean;
    itemChangeCallback: any;
    itemResizeCallback: any;
}


import {
  Component,
  OnInit,
  OnDestroy,
  NgZone,
  TemplateRef,
} from "@angular/core";
import { User } from "src/assets/mock/admin-user/users.model";
import { MocksService } from "src/app/shared/services/mocks/mocks.service";

import * as moment from "moment";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
am4core.useTheme(am4themes_animated);
import swal from "sweetalert2";

@Component({
  selector: "app-pengurusan-laporan-statik",
  templateUrl: "./pengurusan-laporan-statik.component.html",
  styleUrls: ["./pengurusan-laporan-statik.component.scss"],
})
export class PengurusanLaporanStatikComponent implements OnInit, OnDestroy {
  // Chart
  chart: any;
  chart1: any;
  chart2: any;
  chart3: any;
  dataChart: any[] = [];
  dataChart2: any[] = [];
  dataChart3: any[] = [];

  // Datepicker
  bsDPConfig = {
    isAnimated: true,
    containerClass: "theme-default",
  };

  constructor(private mockService: MocksService, private zone: NgZone) {
    this.getData();
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
      if (this.chart1) {
        this.chart1.dispose();
      }
      if (this.chart2) {
        this.chart2.dispose();
      }
      if (this.chart3) {
        this.chart3.dispose();
      }
    });
  }

  successAlert(task) {
    swal.fire({
      title: "Berjaya",
      text: "Berjaya " + task,
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close",
    });
  }

  getData() {
    this.mockService.getAll("admin-report/report-data-1.json").subscribe(
      (res) => {
        // Success
        this.dataChart = res;
      },
      () => {
        // Unsuccess
      },
      () => {
        // After
        this.mockService.getAll("admin-report/report-data-2.json").subscribe(
          (res) => {
            // Success
            this.dataChart2 = res;
          },
          () => {
            // Unsuccess
          },
          () => {
            // After
            this.mockService
              .getAll("admin-report/report-data-3.json")
              .subscribe(
                (res) => {
                  // Success
                  this.dataChart3 = res;
                },
                () => {
                  // Unsuccess
                },
                () => {
                  // After
                  this.getCharts();
                }
              );
          }
        );
      }
    );
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart();
      // this.getChart1();
      this.getChart2();
      this.getChart3();
    });
  }

  getChart() {
    let chart = am4core.create("chartStatic1", am4charts.XYChart);
    // chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [
      {
        month: "Jan",
        survey: 1,
        application: 5,
      },
      {
        month: "Feb",
        survey: 3,
        application: 2,
      },
      {
        month: "Mar",
        survey: 5,
        application: 4,
      },
      {
        month: "Apr",
        survey: 3,
        application: 3,
      },
      {
        month: "May",
        survey: 6,
        application: 5,
      },
      {
        month: "Jun",
        survey: 2,
        application: 4,
      },
      {
        month: "Jul",
        survey: 4,
        application: 3,
      },
      {
        month: "Aug",
        survey: 6,
        application: 5,
      },
      {
        month: "Sep",
        survey: 5,
        application: 4,
      },
      {
        month: "Oct",
        survey: 5,
        application: 5,
      },
      {
        month: "Nov",
        survey: 4,
        application: 5,
      },
      {
        month: "Dec",
        survey: 5,
        application: 6,
      },
    ];
    // Create category axis
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";

    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;
    // categoryAxis.renderer.opposite = true;

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.renderer.inversed = true;
    valueAxis.title.text = "Value";
    valueAxis.renderer.minLabelPosition = 0.01;

    // Create series
    let series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = "survey";
    series1.dataFields.categoryX = "month";
    series1.name = "Survey";
    series1.strokeWidth = 3;
    series1.bullets.push(new am4charts.CircleBullet());
    series1.tooltipText = "Amount {name} in {categoryX}: {valueY}";
    series1.legendSettings.valueText = "{valueY}";
    series1.visible = false;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "application";
    series2.dataFields.categoryX = "month";
    series2.name = "Application";
    series2.strokeWidth = 3;
    series2.bullets.push(new am4charts.CircleBullet());
    series2.tooltipText = "Amount {name} in {categoryX}: {valueY}";
    series2.legendSettings.valueText = "{valueY}";

    // Add chart cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomY";

    // Add legend
    chart.legend = new am4charts.Legend();
  }

  // getChart1() {
  //   let chart = am4core.create("chartdiv1", am4charts.XYChart);
  //   chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

  //   let data = [];
  //   let open = 100;
  //   let close = 250;

  //   for (var i = 1; i < 120; i++) {
  //     open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 4);
  //     close = Math.round(
  //       open +
  //         Math.random() * 5 +
  //         i / 5 -
  //         (Math.random() < 0.5 ? 1 : -1) * Math.random() * 2
  //     );
  //     data.push({ date: new Date(2018, 0, i), open: open, close: close });
  //   }

  //   chart.data = data;

  //   let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

  //   let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  //   valueAxis.tooltip.disabled = true;

  //   let series = chart.series.push(new am4charts.LineSeries());
  //   series.dataFields.dateX = "date";
  //   series.dataFields.openValueY = "open";
  //   series.dataFields.valueY = "close";
  //   series.tooltipText = "open: {openValueY.value} close: {valueY.value}";
  //   series.sequencedInterpolation = true;
  //   series.fillOpacity = 0.3;
  //   series.defaultState.transitionDuration = 1000;
  //   series.tensionX = 0.8;

  //   let series2 = chart.series.push(new am4charts.LineSeries());
  //   series2.dataFields.dateX = "date";
  //   series2.dataFields.valueY = "open";
  //   series2.sequencedInterpolation = true;
  //   series2.defaultState.transitionDuration = 1500;
  //   series2.stroke = chart.colors.getIndex(6);
  //   series2.tensionX = 0.8;

  //   chart.cursor = new am4charts.XYCursor();
  //   chart.cursor.xAxis = dateAxis;
  //   chart.scrollbarX = new am4core.Scrollbar();

  //   this.chart1 = chart;
  // }

  getChart2() {
    // let chart = am4core.create("chartdiv2", am4charts.XYChart);
    let chart = am4core.create("chartStatic2", am4charts.XYChart);
    chart.colors.step = 2;

    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";
    chart.legend.paddingBottom = 20;
    chart.legend.labels.template.maxWidth = 95;

    let xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    xAxis.dataFields.category = "category";
    xAxis.renderer.cellStartLocation = 0.1;
    xAxis.renderer.cellEndLocation = 0.9;
    xAxis.renderer.grid.template.location = 0;

    let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;

    function createSeries(value, name) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = value;
      series.dataFields.categoryX = "category";
      series.name = name;

      series.events.on("hidden", arrangeColumns);
      series.events.on("shown", arrangeColumns);

      let bullet = series.bullets.push(new am4charts.LabelBullet());
      bullet.interactionsEnabled = false;
      bullet.dy = 30;
      bullet.label.text = "{valueY}";
      bullet.label.fill = am4core.color("#ffffff");

      return series;
    }

    chart.data = [
      {
        category: "Jan",
        first: 40,
        second: 55,
      },
      {
        category: "Feb",
        first: 30,
        second: 78,
      },
      {
        category: "Mar",
        first: 27,
        second: 40,
      },
      {
        category: "Apr",
        first: 50,
        second: 33,
      },
    ];

    createSeries("first", "Muat Turun");
    createSeries("second", "Muat Naik");

    function arrangeColumns() {
      let series = chart.series.getIndex(0);

      let w =
        1 -
        xAxis.renderer.cellStartLocation -
        (1 - xAxis.renderer.cellEndLocation);
      if (series.dataItems.length > 1) {
        let x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
        let x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
        let delta = ((x1 - x0) / chart.series.length) * w;
        if (am4core.isNumber(delta)) {
          let middle = chart.series.length / 2;

          let newIndex = 0;
          chart.series.each(function (series) {
            if (!series.isHidden && !series.isHiding) {
              series.dummyData = newIndex;
              newIndex++;
            } else {
              series.dummyData = chart.series.indexOf(series);
            }
          });
          let visibleCount = newIndex;
          let newMiddle = visibleCount / 2;

          chart.series.each(function (series) {
            let trueIndex = chart.series.indexOf(series);
            let newIndex = series.dummyData;

            let dx = (newIndex - trueIndex + middle - newMiddle) * delta;

            series.animate(
              { property: "dx", to: dx },
              series.interpolationDuration,
              series.interpolationEasing
            );
            series.bulletsContainer.animate(
              { property: "dx", to: dx },
              series.interpolationDuration,
              series.interpolationEasing
            );
          });
        }
      }
    }
  }

  getChart3() {
    // let chart = am4core.create("chartdiv3", am4charts.XYChart);
    let chart = am4core.create("chartStatic3", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        country: "Penguna 1",
        value: 260,
      },
      {
        country: "Penguna 2",
        value: 230,
      },
      {
        country: "Penguna 3",
        value: 200,
      },
      {
        country: "Penguna 4",
        value: 165,
      },
    ];

    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.radiusValue = "value";
    series.dataFields.category = "country";
    series.slices.template.cornerRadius = 6;
    series.colors.step = 3;

    series.hiddenState.properties.endAngle = -90;

    chart.legend = new am4charts.Legend();
  }
}

import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { isPlatformBrowser } from '@angular/common';
import { DataService } from 'src/app/Services/data.service';
import { rgba2hex } from '@amcharts/amcharts5/.internal/core/util/Color';

@Component({
  selector: 'app-salesview',
  templateUrl: './salesview.component.html',
  styleUrls: ['./salesview.component.css']
})
export class SalesviewComponent {
  private root!: am5.Root;
  data:any;

  constructor(private dataservice:DataService) {}
  ngAfterViewInit() {
    $.getJSON("https://localhost:44385/api/Manager/GetChartData", function (data) {


      // Create root element
      // https://www.amcharts.com/docs/v5/getting-started/#Root_element
      var root = am5.Root.new("chartdiv");


      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([
          am5themes_Animated.new(root)
      ]);


      // Create chart
      // https://www.amcharts.com/docs/v5/charts/xy-chart/
      var chart = root.container.children.push(am5xy.XYChart.new(root, {
          panX: true,
          panY: true,
          wheelX: "panX",
          wheelY: "zoomX",
          pinchZoomX: true
      }));

      // Add cursor
      // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
      var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
      cursor.lineY.set("visible", false);                                                                        


      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 10 });
      xRenderer.labels.template.setAll({
          rotation: 310,
          centerY: am5.p50,
          centerX: am5.p100,
          paddingRight: 15
      });

      var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
          maxDeviation: 0.3,
          categoryField: "productName",
          renderer: xRenderer,
          tooltip: am5.Tooltip.new(root, {})
      }));

      var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
          maxDeviation: 0.3,
          renderer: am5xy.AxisRendererY.new(root, {})
      }));


      // Create series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
      var series = chart.series.push(am5xy.ColumnSeries.new(root, {
          name: "Series 1",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "orderQuantity",
          sequencedInterpolation: true,
          categoryXField: "productName",
          tooltip: am5.Tooltip.new(root, {
              labelText: "{valueY}"
          })
      }));

      series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
      series.columns.template.adapters.add("fill", function (fill, target) {
          return chart.get("colors")?.getIndex(series.columns.indexOf(target));
      });

      series.columns.template.adapters.add("stroke", function (stroke, target) {
          return chart.get("colors")?.getIndex(series.columns.indexOf(target));
      });

          var bdata = []
          for (var i = 0; i<data.length; i++) {
              bdata.push(data[i])
          }
          xAxis.data.setAll(bdata);
          series.data.setAll(bdata);

          series.appear(1000);
          chart.appear(1000, 100);


    });//end getjson function
  //   this.dataservice.getchartdata().subscribe(datas=>{
  //     //this.data=data;
  //     let data=datas;
  //     //  = [
  //     //         {
  //     //           productName: "abc",
  //     //           orderQuantity: 1000,
               
  //     //         }, {
  //     //           productName: "Research",
  //     //           orderQuantity: 100,
               
  //     //         }, {
  //     //           productName: "hello",
  //     //           orderQuantity: 10,
               
  //     //         }, {
  //     //           productName: "Research",
  //     //           orderQuantity: 10000,
               
  //     //         },
  //     //       ];

  //            // Create root element
  //            // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  //            var root = am5.Root.new("chartdiv");


  //            // Set themes
  //            // https://www.amcharts.com/docs/v5/concepts/themes/
  //            root.setThemes([
  //                am5themes_Animated.new(root)
  //            ]);


  //            // Create chart
  //            // https://www.amcharts.com/docs/v5/charts/xy-chart/
  //            var chart = root.container.children.push(am5xy.XYChart.new(root, {
  //                panX: true,
  //                panY: true,
  //                wheelX: "panX",
  //                wheelY: "zoomX",
  //                pinchZoomX: true
  //            }));

  //            // Add cursor
  //            // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  //            var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
  //            cursor.lineY.set("visible", false);                                                                        


  //            // Create axes
  //            // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  //            var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 10 });
  //            xRenderer.labels.template.setAll({
  //                rotation: 310,
  //                centerY: am5.p50,
  //                centerX: am5.p100,
  //                paddingRight: 15
  //            });

  //            var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
  //                maxDeviation: 0.3,
  //                categoryField: "productName",
  //                renderer: xRenderer,
  //                tooltip: am5.Tooltip.new(root, {})
  //            }));

  //            var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  //                maxDeviation: 0.3,
  //                renderer: am5xy.AxisRendererY.new(root, {})
  //            }));


  //            // Create series
  //            // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  //            var series = chart.series.push(am5xy.ColumnSeries.new(root, {
  //                name: "Series 1",
  //                xAxis: xAxis,
  //                yAxis: yAxis,
  //                valueYField: "orderQuantity",
  //                sequencedInterpolation: true,
  //                categoryXField: "productName",
  //                tooltip: am5.Tooltip.new(root, {
  //                    labelText: "{valueY}"
  //                })
  //            }));

  //            series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
  //            series.columns.template.adapters.add("fill", function (fill, target) {
  //                return chart.get("colors")?.getIndex(series.columns.indexOf(target));
  //            });

  //            series.columns.template.adapters.add("stroke", function (stroke, target) {
  //                return chart.get("colors")?.getIndex(series.columns.indexOf(target));
  //            });

  //               var bdata= [data];
  //               bdata.forEach(item=>{
  //                 for(var i=0;i<item.length;i++){

  //                 }
  //                 console.log(item)
  //               })

                    
                 
  //                xAxis.data.setAll(bdata);
  //                series.data.setAll(bdata);
  //                series.appear(1000);
  //                chart.appear(1000, 100);


    
    
    
    
    
    
  //  })
  //   // Chart code goes in here

  //     let root = am5.Root.new("chartdiv");

  //     root.setThemes([am5themes_Animated.new(root)]);

  //     let chart = root.container.children.push(am5xy.XYChart.new(root, {
  //       panX: true,
  //       panY: true,
  //       wheelX: "panX",
  //       wheelY: "zoomX",
  //       pinchZoomX: true
  //   }));

  //     // Define data
  //     let data = [
  //       {
  //         category: "Research",
  //         value1: 1000,
  //         value2: 588
  //       },
  //       {
  //         category: "Marketing",
  //         value1: 1200,
  //         value2: 1800
  //       },
  //       {
  //         category: "Sales",
  //         value1: 850,
  //         value2: 1230
  //       }
  //     ];

  //     // Create Y-axis
  //     let yAxis = chart.yAxes.push(
  //       am5xy.ValueAxis.new(root, {
  //         renderer: am5xy.AxisRendererY.new(root, {})
  //       })
  //     );

  //     // Create X-Axis
  //     let xAxis = chart.xAxes.push(
  //       am5xy.CategoryAxis.new(root, {
  //         renderer: am5xy.AxisRendererX.new(root, {}),
  //         categoryField: "category"
  //       })
  //     );
  //     xAxis.data.setAll(data);

  //     // Create series
  //     let series1 = chart.series.push(
  //       am5xy.ColumnSeries.new(root, {
  //         name: "Series",
  //         xAxis: xAxis,
  //         yAxis: yAxis,
  //         valueYField: "value1",
  //         categoryXField: "category"
  //       })
  //     );
  //     series1.data.setAll(data);

  //     let series2 = chart.series.push(
  //       am5xy.ColumnSeries.new(root, {
  //         name: "Series",
  //         xAxis: xAxis,
  //         yAxis: yAxis,
  //         valueYField: "value2",
  //         categoryXField: "category"
  //       })
  //     );
  //     series2.data.setAll(data);

  //     // Add legend
  //     let legend = chart.children.push(am5.Legend.new(root, {}));
  //     legend.data.setAll(chart.series.values);

  //     // Add cursor
  //     chart.set("cursor", am5xy.XYCursor.new(root, {}));

  //     this.root = root;
  // }

  // ngOnDestroy() {
  //   // Clean up chart when the component is removed

  //     if (this.root) {
  //       this.root.dispose();
  //     }
    
  }
}

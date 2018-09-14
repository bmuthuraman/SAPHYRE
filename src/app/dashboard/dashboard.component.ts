import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
declare var jquery:any;
declare var $ :any;
declare var Chart : any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public dashboards = [];

  constructor(private _dashboardService: DashboardService) { }

  ngOnInit() {

    this._dashboardService.getHome()
    .subscribe (data => this.dashboards = data);

    // Accordion Start
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            var active = document.getElementsByClassName('active');
            if (active.length && active[0] !== this) {
                active[0].classList.remove('active');
            }
                this.classList.toggle("active");
        });
    }
    // Accordion End

    // Horizontal Bar Chart //
    $('.progress1').animate({ width: '30%' }, 1000);
    $('.progress2').animate({ width: '60%' }, 1000);
    $('.progress3').animate({ width: '50%' }, 1000);
    $('.progress4').animate({ width: '25%' }, 1000);
    $('.progress5').animate({ width: '0%' }, 1000);


    // Chart Start
    Chart.pluginService.register({
      beforeDraw: function(chart) {
        if (chart.options.elements.center) {
          // create center element
          var center = chart.options.elements.center;
          var fontStyle = center.fontStyle || 'Arial';
          var color = center.color || '#000';
          var width = chart.chart.width;
          var height = chart.chart.height;
          var ctx = chart.chart.ctx;
          ctx.fillStyle = color;
          // text1 fontSize calculation
          ctx.restore();
          var fontSize = (height / 60).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          ctx.textAlign = 'center';
          ctx.textBaseline = "middle";
          // text1
          var text1 = center.text;
          var textX1 = width / 2;
          var textY1 = height / 2.2;
          ctx.fillText(text1, textX1, textY1);
                // text2 fontSize calculation
          fontSize = (height / 150).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
          // text2
          var text2 = "Funds";
          var textY2 = height / 1.6;
          ctx.fillText(text2, textX1, textY2);
          ctx.save();
        }
      }
    });

    var ctx1 = document.getElementById("doughnut1");
    var ctx2 = document.getElementById("doughnut2");
    var ctx3 = document.getElementById("doughnut3");
    var ctx4 = document.getElementById("doughnut4");

    //1.doughnut chart data
    new Chart(ctx1, {
      type: 'doughnut',
      data: {
        labels: ["label1","label2","label3"],
        datasets: [{
          data: [20, 20, 20],
          backgroundColor: ["#cde9eb","#9dd6db","#56c1c7"],
          borderWidth: [0, 0, 0]
        }]
      },
      options: {
        radiusBackground: {color: '#f5f7f9'},
        cutoutPercentage: 60,
        legend: {display: false},
        elements: {
          center: {text: '100',color: '#999',fontStyle: 'Arial',sidePadding: 20}
        }
      }
    });
    //2.doughnut chart data
    new Chart(ctx2, {
      type: 'doughnut',
      data: {
        labels: ["label1","label2","label3"],
        datasets: [{
          data: [180, 80, 100],
          backgroundColor: ["#c1dcf1","#87c2e5","#09a5d8"],
          borderWidth: [0, 0, 0]
        }]
      },
      options: {
        radiusBackground: {color: '#f5f7f9'},
        cutoutPercentage: 60,
        legend: {display: false},
        elements: {
          center: {text: '1000',color: '#999',fontStyle: 'Arial',sidePadding: 20}
        }
      }
    });
    //3.doughnut chart data
    new Chart(ctx3, {
      type: 'doughnut',
      data: {
        labels: ["label1","label2","label3"],
        datasets: [{
          data: [90, 110, 160],
          backgroundColor: ["#b3c4dd","#779bc4","#1a72a8"],
          borderWidth: [0, 0, 0]
        }]
      },
      options: {
        radiusBackground: {color: '#f5f7f9'},
        cutoutPercentage: 60,
        legend: {display: false},
        elements: {
          center: {text: '999',color: '#999',fontStyle: 'Arial',sidePadding: 20}
        }
      }
    });
    //4.doughnut chart data
    new Chart(ctx4, {
      type: 'doughnut',
      data: {
        labels: ["label1","label2","label3"],
        datasets: [{
          data: [180, 80, 100],
          backgroundColor: ["#b0b3c7","#787fa0","#2f4e7a"],
          borderWidth: [0, 0, 0]
        }]
      },
      options: {
        radiusBackground: {color: '#f5f7f9'},
        cutoutPercentage: 60,
        legend: {display: false},
        elements: {
          center: {text: '1.5K',color: '#999',fontStyle: 'Arial',sidePadding: 20}
        }
      }
    });
    // default Background
    var radiusBackground = function() {
      var self = this;
    
      self.draw = function(chartInstance) {
        if(chartInstance.options.radiusBackground) {
          var x = chartInstance.chart.canvas.clientWidth / 2,
              y = chartInstance.chart.canvas.clientHeight / 2,
              ctx = chartInstance.chart.ctx;    
          ctx.beginPath();
          ctx.arc(x, y, chartInstance.outerRadius - (chartInstance.radiusLength / 2), 0, 2 * Math.PI);
          ctx.lineWidth = chartInstance.radiusLength;
          ctx.strokeStyle = chartInstance.options.radiusBackground.color || '#d1d1d1';
          ctx.stroke();
        }
      };
      // see for plugin interface
      return {
        beforeDatasetsDraw: self.draw,
        onResize: self.draw
      }
    };
    
    // Register with Chart JS
    Chart.plugins.register(radiusBackground());
  }
}

import { Component, ViewChild, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-char-resources',
  templateUrl: './char-resources.component.html',
  styleUrls: ['./char-resources.component.scss'],
})
export class CharResourcesComponent implements OnInit {
  @Input() dataChart: any;
  charOption: any;

  ngOnInit() {
    console.log(this.dataChart);
    this.charOption = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backGroundColor: '#dfdfdf',
        className:'w-full'
      },
      title: {
        text: this.dataChart.text,
        style: {
          color: '#333'
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      series: [{
        data: this.dataChart.data
    }]
    };
  }
}

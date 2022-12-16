import { Component } from '@angular/core';

@Component({
  selector: 'app-resources-data',
  templateUrl: './resources-data.component.html',
  styleUrls: ['./resources-data.component.scss']
})
export class ResourcesDataComponent {
  dataChart = [
    {
      text: '4GPU',
      data: [
        {name: 'Đã sử dụng', color: '#4318ff', y: 60},
        {name: 'Còn lại', color: '#E6E8ED', y: 40}
      ]
    },
    {
      text: '32G Ram',
      data: [
        {name: 'Đã sử dụng', color: '#4318ff', y: 60},
        {name: 'Còn lại', color: '#E6E8ED', y: 40}
      ]
    },
    {
      text: '4 tác vụ song song',
      data: [
        {name: 'Đã sử dụng', color: '#4318ff', y: 60},
        {name: 'Còn lại', color: '#E6E8ED', y: 40}
      ]
    },
  ]
}

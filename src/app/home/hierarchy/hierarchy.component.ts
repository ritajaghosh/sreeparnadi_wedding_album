import { Component, OnInit } from '@angular/core';
import {MessageService, TreeNode} from "primeng/api";

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.scss']
})
export class HierarchyComponent implements OnInit {
  data1: TreeNode[]=[];

  constructor() { }

  ngOnInit(): void {
    this.data1 = [{
      label: 'পাত্র-পাত্রী',
      type: 'person',
      styleClass: 'p-person',
      expanded: true,
      data: {name:'শ্রীপর্ণা ও সৌভিক', 'avatar': 'walter.jpg'},
      children: [
        {
          label: 'পাত্র পক্ষ',
          type: 'person',
          styleClass: 'p-person',
          expanded: true,
          data: {name:'দত্ত বাড়ি', 'avatar': 'saul.jpg'},
          children:[{
            label: 'Tax',
            styleClass: 'department-cfo'
          },
            {
              label: 'Legal',
              styleClass: 'department-cfo'
            }],
        },

        {
          label: 'পাত্রী পক্ষ',
          type: 'person',
          styleClass: 'p-person',
          expanded: true,
          data: {name:'দাস বাড়ি', 'avatar': 'jesse.jpg'},
          children:[{
            label: 'Development',
            styleClass: 'department-cto',
            expanded: true,
            children:[{
              label: 'Analysis',
              styleClass: 'department-cto'
            },
              {
                label: 'Front End',
                styleClass: 'department-cto'
              },
              {
                label: 'Back End',
                styleClass: 'department-cto'
              }]
          },
            {
              label: 'QA',
              styleClass: 'department-cto'
            },
            {
              label: 'R&D',
              styleClass: 'department-cto'
            }]
        }
      ]
    }];

  }

  // onNodeSelect(event: any) {
  //   this.messageService.add({severity: 'success', summary: 'Node Selected', detail: event.node.label});
  // }

}


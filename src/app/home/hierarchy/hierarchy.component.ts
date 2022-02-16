import { Component, OnInit } from '@angular/core';
import {MessageService, TreeNode} from "primeng/api";

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  providers: [MessageService],
  styleUrls: ['./hierarchy.component.scss']
})
export class HierarchyComponent implements OnInit {
  data1: TreeNode[]=[];
  selectedNode: TreeNode = {
    label: 'CFO',
    type: 'person',
    styleClass: 'p-person',
    expanded: true,
    data: {name:'Saul Goodman', 'avatar': 'saul.jpg'}
  };
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.data1 = [{
      label: 'পাত্র-পাত্রী',
      type: 'person',
      styleClass: 'p-person',
      expanded: true,
      data: {name:'শ্রীপর্ণা ও সৌভিক', 'avatar': 'avatar2.jpg'},
      children: [
        {
          label: 'পাত্র পক্ষ',
          type: 'person',
          styleClass: 'p-person',
          expanded: true,
          data: {name:'দত্ত বাড়ি', 'avatar': 'avatar1.jpg'}

        },

        {
          label: 'পাত্রী পক্ষ',
          type: 'person',
          styleClass: 'p-person',
          expanded: true,
          data: {name:'দাস বাড়ি', 'avatar': 'avatar1.jpg'},
          children:[
            {
              label: 'পাত্রী পক্ষ',
              type: 'person',
              styleClass: 'p-person',
              expanded: true,
              data: {name:'দাস বাড়ি', 'avatar': 'avatar1.jpg'},
              children:[]
            },
            {
              label: 'বড় কাকুর পরিবার',
              type: 'person',
              styleClass: 'p-person',
              expanded: true,
              data: {name:'বড় কাকু ও বড় কাকিমা', 'avatar': 'avatar1.jpg'},
            },
            {
              label: 'ছোট কাকুর পরিবার',
              type: 'person',
              styleClass: 'p-person',
              expanded: true,
              data: {name:'অকৃতদার ছোট কাকু', 'avatar': 'avatar1.jpg'},
            }
          ]
        }
      ]
    }];

  }

  // onNodeSelect(event: any) {
  //   this.messageService.add({severity: 'success', summary: 'Node Selected', detail: event.node.label});
  // }

  onNodeSelect(event: any) {
    this.messageService.add({severity: 'success', summary: 'Node Selected', detail: event.node.label});
  }
}


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
      data: {name:'শ্রীপর্ণা ও সৌম্যক', 'avatar': 'avatar2.jpg'},
      children: [
        {
          label: 'পাত্র পক্ষ',
          type: 'person',
          styleClass: 'p-person',
          expanded: true,
          data: {name:'দত্ত বাড়ি', 'avatar': 'avatar1.jpg'},
          children:[
            {
              label: 'Father and Mother',
              type: 'person',
              styleClass: 'p-person',
              expanded: true,
              data: {name:'সনৎ কুুমার দত্ত  এবং কৃৃষ্ণা দত্ত', 'avatar': 'avatar3.jpg'},
            }
          ]
        },

        {
          label: 'পাত্রী পক্ষ',
          type: 'person',
          styleClass: 'p-person',
          expanded: true,
          data: {name:'দাস বাড়ি', 'avatar': 'avatar1.jpg'},
          children:[
            {
              label: 'Father and Mother',
              type: 'person',
              styleClass: 'p-person',
              expanded: true,
              data: {name:'Keshab Ch. Das & Amita', 'avatar': 'avatar1.jpg'},
              children:[
                {
                  label: 'Bride',
                  type: 'person',
                  styleClass: 'p-person',
                  expanded: true,
                  data: {name:'Sreeparna Das', 'avatar': 'avatar1.jpg'},
                  children:[

                  ]
                },
                {
                  label: 'Didi & Jamaibabu',
                  type: 'person',
                  styleClass: 'p-person',
                  expanded: true,
                  data: {name:'Rituparna Dutta & Prosenjit Dutta', 'avatar': 'avatar1.jpg'},
                  children:[

                    {
                      label: 'nephew',
                      type: 'person',
                      styleClass: 'p-person',
                      expanded: true,
                      data: {name:'Rio', 'avatar': 'avatar1.jpg'},
                      children:[

                      ]
                    }

                  ]
                }
              ]
            },
            {
              label: 'বড় কাকুর পরিবার',
              type: 'person',
              styleClass: 'p-person',
              expanded: true,
              data: {name:'বড় কাকু ও বড় কাকিমা', 'avatar': 'avatar1.jpg'},
              children: [
                {
                  label: 'cousin',
                  type: 'person',
                  styleClass: 'p-person',
                  expanded: true,
                  data: {name:'Manjari Das', 'avatar': 'avatar1.jpg'},
                },
                {
                  label: 'cousin',
                  type: 'person',
                  styleClass: 'p-person',
                  expanded: true,
                  data: {name:'Manish Das', 'avatar': 'avatar1.jpg'},
                }
              ]
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
    this.messageService.add({severity: 'success', summary: 'Family', detail: event.node.label});
  }
}


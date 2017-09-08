import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement')
  element: {
    name: string,
    type: string,
    content: string
  };

  constructor() {
    console.log('Constructor called!');
  }

  ngOnInit() {
    console.log('ng on init called');
  }

}

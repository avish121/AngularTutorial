import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowedAddButton: Boolean = false
  constructor() {
    setTimeout(()=> {
      this.allowedAddButton = true
    },5000)
  }

  ngOnInit(): void {
  }

}

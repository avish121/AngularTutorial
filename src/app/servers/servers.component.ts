import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowedAddButton: Boolean = false;
  serverName:string = "";
  serverCreatedStatus: string = "No server created";
  constructor() {
    setTimeout(()=> {
      this.allowedAddButton = true
    },2000)
  }

  ngOnInit(): void {
  }

  onUpdateServerName(event: Event){
    //console.log(event.target);
    this.serverName = (event.target as HTMLInputElement).value;
  }

  onCreateServer(){
    this.serverCreatedStatus = "Server is created, name is " + this.serverName;
  }


}

import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit(): void { }

  public onAddServer(serverNameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({ serverName: serverNameInput.value, serverContent: (this.serverContentInput.nativeElement as HTMLInputElement).value });
  }

  public onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({ serverName: serverNameInput.value, serverContent: (this.serverContentInput.nativeElement as HTMLInputElement).value });
  }
}

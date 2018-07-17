import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data;

  constructor(private dataService: DataService) {}

  questionClick(d) {
    d.visible = !d.visible;
    this.data.forEach(o => {
      if (o !== d) {
        o.visible = false;
      }
    });
  }

  ngOnInit() {
    this.dataService.getJSON().subscribe(d => {
      d.map(o => (o.visible = false));
      this.data = d;
    });
  }
}

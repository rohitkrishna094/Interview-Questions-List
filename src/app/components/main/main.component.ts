import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  files;
  data;

  constructor(private dataService: DataService) {
    this.files = ['Java', 'Spring', 'Hibernate'];
  }

  questionClick(d) {
    d.visible = !d.visible;
    this.data.forEach(o => {
      if (o !== d) {
        o.visible = false;
      }
    });
  }

  fileChange(file) {
    console.log(file);
    // start here
  }

  ngOnInit() {
    this.dataService.getJSON().subscribe(d => {
      d.map(o => (o.visible = false));
      this.data = d;
    });
  }
}

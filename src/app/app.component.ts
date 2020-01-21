import {Component, OnInit} from '@angular/core';
import {HelloService} from './hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hello-world';

  user: any;

  constructor(private helloService: HelloService) {

  }

  ngOnInit() {
    this.helloService.getAll().subscribe(data => {
      this.user = data.name + ' ' + data.surname;
    });
  }
}

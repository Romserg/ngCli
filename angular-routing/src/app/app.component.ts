import { Component } from '@angular/core';
import { LoggerService } from '../../projects/my-lib/src/lib/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-routing';

  constructor(logger: LoggerService) {
    logger.log('hello');
  }
}

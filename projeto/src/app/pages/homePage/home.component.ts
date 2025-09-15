import { Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [TitleComponent],
})
export class HomeComponent {}

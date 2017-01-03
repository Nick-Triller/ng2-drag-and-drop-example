import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [
    {content: "Banana"},
    {content: "Apple"},
    {content: "Horse"},
    {content: "Dog"},
    {content: "Carpet"},
    {content: "Head"},
    {content: "Water"},
    {content: "Snow"}
    ];

  removeItem(index: number): void {
    this.data.splice(index, 1);
  }

  addItem(content): void {
    this.data.push({content});
  }
}

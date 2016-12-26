import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'show-cloth',
  templateUrl: './show-cloth.component.html',
  styleUrls: ['./show-cloth.component.css']
})
export class ShowClothComponent implements OnInit {

  frontName: string = '成功大學';
  number: string = '13';
  clothColor: string = '#d143dc';
  textColor: string = '#000000';
  fontArray = [ '標楷體', '華康雅風體W3'];
  selectFont = 'Yu Gothic';

  constructor() { }

  ngOnInit() {
  }

}

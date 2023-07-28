import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-polygon-border-div',
	templateUrl: 'polygon-border-div.component.html',
	styleUrls: ['polygon-border-div.component.css']
})
export class PolygonBorderDiv implements OnInit {
	@Input('bgColor') bgColor : string = '#1C1A17';
	@Input('borderColor') borderColor : string = '#FFFFFF35';
	@Input('weight') weight : number = 1;
	@Input('cutRange') cutRange : number = 15;
	@Input('cornerStatus') cornerStatus : number[] = [1,0,1,0];
	// @Input('cornerStatus') cornerStatus : number[] = [0,1,0,1];
	@Input('specify') specify : string = '0';
	@Input('j-class') j_class : string = '';

	pStr : string[] = ["0% 0%","100% 0%","100% 100%","0% 100%"];
	cStr : string[] = ["0% 0%","100% 0%","100% 100%","0% 100%"];
	hStr : string[] = ["0% 0%","100% 0%","100% 100%","0% 100%"];
	constructor() { }
  	ngOnInit(): void {
		if (this.specify == "1"){
			let a = this.cornerStatus[0]*this.cutRange + 'px';
			let b = this.cornerStatus[1]*this.cutRange + 'px';
			let c = this.cornerStatus[2]*this.cutRange + 'px';
			let d = this.cornerStatus[3]*this.cutRange + 'px';
			this.pStr[0] = ' 0% '+ a + ' , ' + a + ' 0% ' ;
			this.pStr[1] = ' calc(100% - '+ b + ') 0% ' + ' , ' + ' 100% ' + b ;
			this.pStr[2] = ' 100% calc(100% - '+ c + ') ' + ' , ' + ' calc(100% - '+ c + ') 100% ';
			this.pStr[3] = d + ' 100% ' + ' , ' + ' 0% ' + ' calc(100% - '+ d + ')';
			
			let w = this.weight + 'px';
			let a1 = this.cornerStatus[0]*this.cutRange + (1-this.cornerStatus[0])*this.weight + 'px';
			let b1 = this.cornerStatus[1]*this.cutRange + (1-this.cornerStatus[1])*this.weight + 'px';
			let c1 = this.cornerStatus[2]*this.cutRange + (1-this.cornerStatus[2])*this.weight + 'px';
			let d1 = this.cornerStatus[3]*this.cutRange + (1-this.cornerStatus[3])*this.weight + 'px';
	
			this.cStr[0] = w +' '+ a1 + ' , ' + a1 + ' ' + w ;
			this.cStr[1] = ' calc(100% - '+ b1 + ') '+ w +' ' + ' , ' + 'calc(100% - '+ w +')'+' '+ b1 ;
			this.cStr[2] = ' calc(100% - '+ w + ')'+' '+'calc(100% -'+' '+ c1 +')'+','+ 'calc(100% - '+' '+ c1 + ') '+' '+'calc(100% - '+ w +')';
			this.cStr[3] = d1 +' '+ 'calc(100% - '+ w +')' + ' , ' + w+'  ' + ' calc(100% - '+ d1 + ')';
	
			let hoverw = this.weight + 'px';
			this.hStr[0] = hoverw +' '+ hoverw + ' , ' + hoverw + ' ' + hoverw ;
			this.hStr[1] = ' calc(100% - '+ hoverw + ') '+ hoverw +' ' + ' , ' + 'calc(100% - '+ hoverw +')'+' '+ hoverw ;
			this.hStr[2] = ' calc(100% - '+ hoverw + ')'+' '+'calc(100% -'+' '+ hoverw +')'+','+ 'calc(100% - '+' '+ hoverw + ') '+' '+'calc(100% - '+ hoverw +')';
			this.hStr[3] = hoverw +' '+ 'calc(100% - '+ hoverw +')' + ' , ' + hoverw+'  ' + ' calc(100% - '+ hoverw + ')';
		}
	}

}

import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {

    constructor( private  elementRef: ElementRef) {
    }


    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = '#95A5A6';
        this.elementRef.nativeElement.style.color           = '#f9f9f9';
    }

}
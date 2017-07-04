import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({selector: '[appBetterHighlight]'})

export class BetterHighlightDirective implements OnInit {
    constructor() {}

    ngOnInit() {}
    // Sets initial variables
    @Input()defaultBackgroundColor = 'transparent';
    @Input()defaultTextColor = '#000';
    @Input()hoverBackgroundColor = '#2c3e50';
    @Input()hoverTextColor = '#f8f8f8';

    @HostBinding('style.color')color : string = this.defaultTextColor;
    @HostBinding('style.backgroundColor')backgroundColor : string = this.defaultBackgroundColor;

    // Binds Variables to <p directiveName>
    @HostListener('mouseover')mouseover(eventData : Event) {
        this.backgroundColor = this.hoverBackgroundColor;
        this.color = this.hoverTextColor;
    }

    @HostListener('mouseleave')mouseleave(eventData : Event) {
        this.backgroundColor = this.defaultBackgroundColor;
        this.color = this.defaultTextColor;
    }

}

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

    @Input() set appUnless(condition: boolean){
        if (!condition) {
            // Says to create/show view if condition/onlyOdd is false.
            this.viewCont.createEmbeddedView(this.tempRef);
        } else {
            // Removes directive view when condition/onlyOdd is true.
            this.viewCont.clear();
        }
    }

    // What we are rendering, and Where we are rendering
  constructor(private tempRef: TemplateRef<any>, private viewCont: ViewContainerRef ) { }

}

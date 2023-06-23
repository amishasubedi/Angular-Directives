import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // bind the condition to the directive from the template where it is used
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef); // render the template content within a container.
    } else {
      this.vcRef.clear(); //  remove the rendered content from the container
    }
  }

  // ViewContainerRef -  It represents a container where views can be dynamically added or removed. It allows you to control what content is rendered within a specific element.

  // TemplateRef - It represents the content of a template that can be dynamically rendered within a view container. It defines the structure and layout of the content that will be inserted into the container.
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

  }

}

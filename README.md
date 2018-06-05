# angular-select2-ajax-module

It is an angular select2 module for search data through ajax request.

  @Input('prop') prop: string; // compulsory
  @Input('url') url: string; // compulsory
  @Input('placeholder') placeholder: string;
  @Input('minword') minword: number;
  @Input('delay') delay: number;
  @Input('cache') cache: boolean; // compulsory
  @Output('changeValue') changeValue: EventEmitter <any> = new EventEmitter(); // compulsory
  
  

import { Component, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth/auth.service';

declare let $: any;

@Component({
  selector: 'select2-ajax',
  templateUrl: './select2-ajax.component.html',
  styleUrls: ['./select2-ajax.component.css']
})
export class Select2AJAXComponent implements AfterViewInit {
  
  @Input('prop') prop: string; // compolsary
  @Input('url') url: string; // compolsary
  @Input('placeholder') placeholder: string;
  @Input('minword') minword: number;
  @Input('delay') delay: number;
  @Input('cache') cache: boolean; // compolsary
  @Output('changeValue') changeValue: EventEmitter <any> = new EventEmitter(); // compolsary

  constructor(
    private authS: AuthService
  ) { }

  ngAfterViewInit() {
    this.options();
    this.change();
  }

  private options() {
    $('#select2_ajax').select2({
      placeholder: this.placeholder || 'Search for Select',
      allowClear: true,
      ajax: this.makeOption(this.prop),
      minimumInputLength: this.minword || 3,
    });
  }

  private makeOption(prop) {
    return {
      url: this.url,
      headers: {
        Authorization : 'Bearer ' + this.authS.getToken()
      },
      delay: this.delay || 500,
      data: params => {
        return {
          search: params.term
        };
      },
      processResults: data => {
        console.log(data);
        return {
          results: this.formateData(data, prop)
        };
      },
      cache: this.cache
    };
  }

  private formateData(data, prop) {
    for (let d of data) {
      d['text'] = d[prop];
    }
    return data;
  }

  change() {
    $('#select2_ajax').change(() => {
      const value = $('#select2_ajax').val();
      console.log(value);
      this.changeValue.emit(value);
    });
  }


}

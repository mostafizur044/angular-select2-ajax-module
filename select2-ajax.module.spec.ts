import { Select2AJAXModule } from './select2-ajax.module';

describe('Select2AJAXModule', () => {
  let select2AJAXModule: Select2AJAXModule;

  beforeEach(() => {
    select2AJAXModule = new Select2AJAXModule();
  });

  it('should create an instance', () => {
    expect(select2AJAXModule).toBeTruthy();
  });
});

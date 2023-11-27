import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWithHardcodeOptionsComponent } from './select-with-hardcode-options.component';

describe('SelectWithHardcodeOptionsComponent', () => {
  let component: SelectWithHardcodeOptionsComponent;
  let fixture: ComponentFixture<SelectWithHardcodeOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectWithHardcodeOptionsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectWithHardcodeOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRFormsComponent } from './test-r-forms.component';

describe('TestRFormsComponent', () => {
  let component: TestRFormsComponent;
  let fixture: ComponentFixture<TestRFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestRFormsComponent]
    });
    fixture = TestBed.createComponent(TestRFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

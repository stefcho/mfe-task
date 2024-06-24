import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignComponentsComponent } from './design-components.component';

describe('DesignComponentsComponent', () => {
  let component: DesignComponentsComponent;
  let fixture: ComponentFixture<DesignComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

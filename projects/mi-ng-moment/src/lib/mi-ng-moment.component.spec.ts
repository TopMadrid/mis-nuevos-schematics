import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiNgMomentComponent } from './mi-ng-moment.component';

describe('MiNgMomentComponent', () => {
  let component: MiNgMomentComponent;
  let fixture: ComponentFixture<MiNgMomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiNgMomentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiNgMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

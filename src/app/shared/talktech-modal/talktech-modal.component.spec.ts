import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalktechModalComponent } from './talktech-modal.component';

describe('TalktechModalComponent', () => {
  let component: TalktechModalComponent;
  let fixture: ComponentFixture<TalktechModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalktechModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalktechModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWsComponent } from './show-ws.component';

describe('ShowWsComponent', () => {
  let component: ShowWsComponent;
  let fixture: ComponentFixture<ShowWsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowWsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpAddressFinderComponent } from './ip-address-finder.component';

describe('IpAddressFinderComponent', () => {
  let component: IpAddressFinderComponent;
  let fixture: ComponentFixture<IpAddressFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpAddressFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpAddressFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciaScreenComponent } from './denuncia-screen.component';

describe('DenunciaScreenComponent', () => {
  let component: DenunciaScreenComponent;
  let fixture: ComponentFixture<DenunciaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenunciaScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DenunciaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

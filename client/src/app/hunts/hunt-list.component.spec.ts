import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HuntListComponent } from './hunt-list.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockHuntService } from 'src/testing/hunt.service.mock';
import { HuntService } from './hunt.service';

const COMMON_IMPORTS: unknown[] = [
  FormsModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatButtonModule,
  MatInputModule,
  MatExpansionModule,
  MatTooltipModule,
  MatListModule,
  MatDividerModule,
  MatRadioModule,
  MatIconModule,
  MatSnackBarModule,
  BrowserAnimationsModule,
  RouterTestingModule,
];

describe('Hunt list', () => {

  let huntList: HuntListComponent;
  let fixture: ComponentFixture<HuntListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [COMMON_IMPORTS, HuntListComponent],
      providers: [{ provide: HuntService, useValue: new MockHuntService() }]
    });
  });

  beforeEach(waitForAsync(() => {
    TestBed.compileComponents().then(() => {
      // Create component and test fixture
      fixture = TestBed.createComponent(HuntListComponent);
      // Get the component from the fixture
      huntList = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('contains all the hunts', () => {
    expect(huntList.serverFilteredHunts.length).toBe(3);
  });

  it('contains a hunt with hostid "chris"', () => {
    expect(huntList.serverFilteredHunts.some((hunt: { hostid: string; }) => hunt.hostid === 'chris')).toBe(true);
  });
});
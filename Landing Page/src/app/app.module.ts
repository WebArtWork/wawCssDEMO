import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WawTestComponent } from './pages/waw-test/waw-test/waw-test.component';
import { WawAlertComponent } from './pages/waw-alert/waw-alert/waw-alert.component';
import { WawBadgeComponent } from './pages/waw-badge/waw-badge/waw-badge.component';
import { WawBtnComponent } from './pages/waw-btn/waw-btn/waw-btn.component';
import { WawCardComponent } from './pages/waw-card/waw-card/waw-card.component';
import { WawChipsComponent } from './pages/waw-chips/waw-chips/waw-chips.component';
import { WawListComponent } from './pages/waw-list/waw-list/waw-list.component';
import { WawMatMenuComponent } from './pages/waw-mat-menu/waw-mat-menu/waw-mat-menu.component';
import { WawTabComponent } from './pages/waw-tab/waw-tab/waw-tab.component';
import { WawCheckboxComponent } from './pages/waw-checkbox/waw-checkbox/waw-checkbox.component';
import { WawCollapseComponent } from './pages/waw-collapse/waw-collapse/waw-collapse.component';
import { WawInputComponent } from './pages/waw-input/waw-input/waw-input.component';
import { WawLinksComponent } from './pages/waw-links/waw-links/waw-links.component';
import { WawModalComponent } from './pages/waw-modal/waw-modal/waw-modal.component';
import { WawNavComponent } from './pages/waw-nav/waw-nav/waw-nav.component';
import { WawPopupComponent } from './pages/waw-popup/waw-popup/waw-popup.component';
import { WawProgressComponent } from './pages/waw-progress/waw-progress/waw-progress.component';
import { WawRadioComponent } from './pages/waw-radio/waw-radio/waw-radio.component';
import { WawRangeComponent } from './pages/waw-range/waw-range/waw-range.component';
import { WawScrollComponent } from './pages/waw-scroll/waw-scroll/waw-scroll.component';
import { WawSelectComponent } from './pages/waw-select/waw-select/waw-select.component';
import { WawSpinnerComponent } from './pages/waw-spinner/waw-spinner/waw-spinner.component';
import { WawSwitchComponent } from './pages/waw-switch/waw-switch/waw-switch.component';
import { WawTextareaComponent } from './pages/waw-textarea/waw-textarea/waw-textarea.component';
import { WawTooltipComponent } from './pages/waw-tooltip/waw-tooltip/waw-tooltip.component';



const routes: Routes = [];


@NgModule({
  declarations: [
    AppComponent,
    WawTestComponent,
    WawAlertComponent,
    WawBadgeComponent,
    WawBtnComponent,
    WawCardComponent,
    WawChipsComponent,
    WawListComponent,
    WawMatMenuComponent,
    WawTabComponent,
    WawCheckboxComponent,
    WawCollapseComponent,
    WawInputComponent,
    WawLinksComponent,
    WawModalComponent,
    WawNavComponent,
    WawPopupComponent,
    WawProgressComponent,
    WawRadioComponent,
    WawRangeComponent,
    WawScrollComponent,
    WawSelectComponent,
    WawSpinnerComponent,
    WawSwitchComponent,
    WawTextareaComponent,
    WawTooltipComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

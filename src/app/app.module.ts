import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NavBarComponent } from "./core/components/nav-bar/nav-bar.component";
import { FooterComponent } from "./core/components/footer/footer.component";
import { SearchBoxComponent } from "./core/components/search/search-box/search-box.component";
import { SearchResultsComponent } from "./core/components/search/search-results/search-results.component";
import { ReportingErrorHandler } from "./core/reporting-error-handler";
import { WindowToken, windowProvider } from "./core/window";
import { HomeComponent } from './home/home.component';
import { NavActionsComponent } from './core/components/nav-actions/nav-actions.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavBarComponent,
    FooterComponent,
    SearchBoxComponent,
    SearchResultsComponent,
    HomeComponent,
    NavActionsComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: ErrorHandler, useClass: ReportingErrorHandler },
    { provide: WindowToken, useFactory: windowProvider }
  ]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './services/logger.service';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TableOfContentsComponent } from './components/table-of-contents/table-of-contents.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SideNavComponent, TableOfContentsComponent, FooterComponent],
  providers: [LoggerService]
})
export class SharedModule { }
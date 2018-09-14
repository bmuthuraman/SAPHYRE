import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

//Routing
import { Approute } from './app.routes';
import { RouterModule } from "@angular/router";

//Service
import { DashboardService } from './dashboard/dashboard.service';

//Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AcclanchComponent } from './acclanch/acclanch.component';
import { CreateEntityComponent } from './create-entity/create-entity.component';
import { ModalComponent } from './modal/modal.component';
import { ModalAboutComponent } from './modal-about/modal-about.component';
import { AssociateInvestorModalComponent } from './associate-investor-modal/associate-investor-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SidenavComponent,
    HomeComponent,
    LoginComponent,
    AcclanchComponent,
    CreateEntityComponent,
    ModalComponent,
    ModalAboutComponent,
    AssociateInvestorModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    DataTablesModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(Approute)
  ],
  providers: [DashboardService, NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [AssociateInvestorModalComponent, ModalAboutComponent]
})
export class AppModule { }

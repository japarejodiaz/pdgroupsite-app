import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DevelopmentProfesionalComponent } from './pages/development-profesional/development-profesional.component';
import { LifeInsuranceComponent } from './pages/life-insurance/life-insurance.component';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { HealthInsuranceComponent } from './pages/health-insurance/health-insurance.component';
import { InternationalPresenceComponent } from './pages/international-presence/international-presence.component';
import { ScheduleSavingsComponent } from './pages/schedule-savings/schedule-savings.component';
import { AnnuitiesComponent } from './pages/annuities/annuities.component';
import { UniversityPlanComponent } from './pages/university-plan/university-plan.component';
import { PensionsRetirementsComponent } from './pages/pensions-retirements/pensions-retirements.component';
import { ModalFormTeamsComponent } from './modal-form-team/modal-form-teams/modal-form-teams.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    AboutUsComponent,
    ServicesComponent,
    PortafolioComponent,
    TeamsComponent,
    ContactUsComponent,
    DevelopmentProfesionalComponent,
    LifeInsuranceComponent,
    ModalFormComponent,
    HealthInsuranceComponent,
    InternationalPresenceComponent,
    ScheduleSavingsComponent,
    AnnuitiesComponent,
    UniversityPlanComponent,
    PensionsRetirementsComponent,
    ModalFormTeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

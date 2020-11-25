import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { DevelopmentProfesionalComponent } from './pages/development-profesional/development-profesional.component';
import { LifeInsuranceComponent } from './pages/life-insurance/life-insurance.component';
import { HealthInsuranceComponent } from './pages/health-insurance/health-insurance.component';
import { AnnuitiesComponent } from './pages/annuities/annuities.component';
import { InternationalPresenceComponent } from './pages/international-presence/international-presence.component';
import { ScheduleSavingsComponent } from './pages/schedule-savings/schedule-savings.component';
import { UniversityPlanComponent } from './pages/university-plan/university-plan.component';
import { PensionsRetirementsComponent } from './pages/pensions-retirements/pensions-retirements.component';


const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "health-insurance", component: HealthInsuranceComponent },
  { path: "annuities", component: AnnuitiesComponent },
  { path: "university-plan", component: UniversityPlanComponent },
  { path: "schedule-savings", component: ScheduleSavingsComponent },
  { path: "international-presence", component: InternationalPresenceComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "life-insurance", component: LifeInsuranceComponent },
  { path: "pensions-retirements", component: PensionsRetirementsComponent },
  { path: "teams", component: TeamsComponent },
  { path: "services", component: ServicesComponent },
  { path: "contact-us", component: ContactUsComponent },
  { path: "development-professional", component: DevelopmentProfesionalComponent },
  { path: "portafolio", component: PortafolioComponent },
  { path: "**", pathMatch: "full", redirectTo: "dashboard" }
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

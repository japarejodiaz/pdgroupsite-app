import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamsComponent } from './pages/teams/teams.component';


const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: "teams", component: TeamsComponent },
  { path: "services", component: ServicesComponent },
  { path: "contact-us", component: ContactUsComponent },
  { path: "portafolio", component: PortafolioComponent },
  { path: "**", pathMatch: "full", redirectTo: "dashboard" }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule { }

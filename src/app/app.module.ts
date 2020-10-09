import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


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
    DevelopmentProfesionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewComponent } from './view/view.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { TopComponent } from './top/top.component';
import { OriginalsComponent } from './originals/originals.component';
import { ComedyComponent } from './comedy/comedy.component';
import { ActionComponent } from './action/action.component';
import { RomanceComponent } from './romance/romance.component';
import { HorrorComponent } from './horror/horror.component';
import { TrendingComponent } from './trending/trending.component';
import { SafePipe } from './safe.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ViewComponent,
    MainComponent,
    TopComponent,
    OriginalsComponent,
    ComedyComponent,
    ActionComponent,
    RomanceComponent,
    HorrorComponent,
    TrendingComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

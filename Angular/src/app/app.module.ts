import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardChatComponent } from './components/card-chat/card-chat.component';
import { ContentMainComponent } from './components/content-main/content-main.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderSidebarComponent } from './components/header-sidebar/header-sidebar.component';
import { LifeComponent } from './components/life/life.component';
import { SecretWordComponent } from './components/secret-word/secret-word.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SwitchThemeIconComponent } from './components/switch-theme-icon/switch-theme-icon.component';
import { WinsComponent } from './components/wins/wins.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    CardChatComponent,
    ContentMainComponent,
    HeaderComponent,
    HeaderSidebarComponent,
    LifeComponent,
    SecretWordComponent,
    SidebarComponent,
    SwitchThemeIconComponent,
    WinsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

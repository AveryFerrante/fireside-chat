import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { StoreModule } from './store';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessagingComponent } from './messaging/messaging.component';
import { ChatWindowComponent } from './messaging/chat-window/chat-window.component';
import { ThreadsComponent } from './messaging/threads/threads.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessagingComponent,
    ChatWindowComponent,
    ThreadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StoreModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

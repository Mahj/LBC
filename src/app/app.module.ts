import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { TabsPage } from "../pages/tabs/tabs";
import { LoginPage } from "../pages/login/login";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AuthProvider } from "../providers/auth/auth";

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { AngularFireAuthModule } from "angularfire2/auth";

/// DELETE this line
//import { firebaseConfig } from "../config/config";

/// ADD your firebase web credentials in the object below

const firebaseConfig = {
  apiKey: "AIzaSyB4CQMJUsN8Vd67R0USHNbu4EUthM2fxd8",
  authDomain: "luxurybankcard.firebaseapp.com",
  databaseURL: "https://luxurybankcard.firebaseio.com",
  projectId: "luxurybankcard",
  storageBucket: "luxurybankcard.appspot.com",
  messagingSenderId: "874672207026"
};

import { Firebase } from "@ionic-native/firebase";
import { Facebook } from "@ionic-native/facebook";
import { Camera } from "@ionic-native/camera";
import { AdMobFree } from "@ionic-native/admob-free";

import { ComponentsModule } from "../components/components.module";
import { DatabaseProvider } from "../providers/database/database";
import { FcmProvider } from "../providers/fcm/fcm";
import { AnalyticsProvider } from "../providers/analytics/analytics";
import { RemoteConfigProvider } from "../providers/remote-config/remote-config";

@NgModule({
  declarations: [MyApp, TabsPage, LoginPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, TabsPage, LoginPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    Firebase,
    Facebook,
    DatabaseProvider,
    Camera,
    AdMobFree,
    FcmProvider,
    AnalyticsProvider,
    RemoteConfigProvider
  ]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormularioComponet} from './components/formulario.component'
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    FormularioComponet
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

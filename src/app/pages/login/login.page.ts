import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides) slides : IonSlides; //1
  public usuarioLogin: Usuario = {};
  public usuarioCadastro: Usuario = {};

  public wavesPosition: number = 0;   //fazer o movimento das ondas EXEMPLO 2
  public wavesDiference: number = 80; //+= para incrementar uma variavel com outra
                                      //só tem a fuidez por causa do transition na classe no CSS.

  constructor() { }

  ngOnInit() {

  }

  segmentChanged(event) {
    console.log(event);  
    // O evento retorna um CustomEvent e uma das propriedades (detail) contem o valor do evento.
    //Para manipular elementos do HTML pelo TS usa-se o @ViewChild passando o componente ou 
    //identificador(#slider) EXEMPLO 1.

    if(event.detail.value === 'login') {
      this.slides.slidePrev(); 
      this.wavesPosition += this.wavesDiference; //2
    } else {
      this.slides.slideNext(); 
      this.wavesPosition -= this.wavesDiference; //2

    }
  }

  login() {

  }

  cadastro() {
    console.log(this.usuarioCadastro);
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides; //1
  public usuarioLogin: Usuario = {};
  public usuarioCadastro: Usuario = {};

  public wavesPosition: number = 0;   //fazer o movimento das ondas EXEMPLO 2
  public wavesDiference: number = 80; //+= para incrementar uma variavel com outra
  //só tem a fuidez por causa do transition na classe no CSS.

  private loading: any;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
  ) { }

  ngOnInit() {

  }

  segmentChanged(event) {
    console.log(event);
    // O evento retorna um CustomEvent e uma das propriedades (detail) contem o valor do evento.
    //Para manipular elementos do HTML pelo TS usa-se o @ViewChild passando o componente ou 
    //identificador(#slider) EXEMPLO 1.

    if (event.detail.value === 'login') {
      this.slides.slidePrev();
      this.wavesPosition += this.wavesDiference; //2
    } else {
      this.slides.slideNext();
      this.wavesPosition -= this.wavesDiference; //2

    }
  }

  async login() {
    await this.presentLoading()

    try {
      await this.authService.login(this.usuarioLogin)
    } catch (erro) {
      console.error(erro);
      this.presentToast(erro.message)
    } finally {
      this.loading.dismiss();
    }
  }

  async cadastro() {
    await this.presentLoading();

    try {
      await this.authService.cadastro(this.usuarioCadastro)
    } catch (erro) {
      console.error(erro);
      let message: string

      switch (erro.code) {
        case 'auth/email-already-in-use':
          message = "Email já cadastrado";
          break;

        case 'auth/invalid-email':
          message = "Formato de email invalido";
          break;
      }
      this.presentToast(message)
    } finally {
      this.loading.dismiss();
    }

    console.log(this.usuarioCadastro);
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Aguarde',
    });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      //No EQ se o nome do parametro recebido for o mesmo da var pode usar assim ao inves de message: message.
      duration: 5000
    });
    toast.present();
  }

}

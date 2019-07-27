import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  login(usuario: Usuario) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(usuario.email, usuario.senha)
  }

  cadastro(usuario: Usuario) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha);
  }

  logout() {

  }

  getAuth() {
    this.angularFireAuth.auth;
    //guarda de rotas, retorna o objeto do usuario, identificando se está logado. 
    //criar guards ionic generate guard guards/"nome"
  }
}

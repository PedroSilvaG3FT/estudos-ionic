import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  login(usuario: Usuario) {

  }

  cadastro( usuario: Usuario) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha);
  }

  logout() {

  }
  
  getAuth() {

  }
}

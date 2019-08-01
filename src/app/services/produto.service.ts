import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtoCollection: AngularFirestoreCollection<Produto>;
  //referencia a collection do firebase e especificando o tipo que é a model

  constructor(private angularFireAuth: AngularFirestore) {
    this.produtoCollection = this.angularFireAuth.collection<Produto>('Produto');
    //Colocando nome na collection/tabela do firebase
  }
}

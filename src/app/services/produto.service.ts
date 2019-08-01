import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Produto } from '../models/produto';
import { map } from 'rxjs/operators';

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

  getAll() { 
    return this.produtoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }

  getById(id: string) {
    return this.produtoCollection.doc<Produto>(id).valueChanges();
  }

  save(produto: Produto) {
    return this.produtoCollection.add(produto);
  }

}

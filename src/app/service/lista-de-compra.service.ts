import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = []

  constructor() {
    this.listaDeCompra = JSON.parse(
      localStorage.getItem('items') || '[]'
    )
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  criarItem(nome: string): Item {
    const id = this.listaDeCompra.length + 1
    const item: Item = {
      id,
      nome,
      data: new Date().toLocaleDateString('pt-BR'),
      comprado: false
    }

    return item
  }

  addItemLista(nome: string) {
    const item = this.criarItem(nome)
    this.listaDeCompra.push(item)
    this.atualizarLocalStorage()
  }

  updateTitleItem(item: Item, nome: string) {
    const index = this.listaDeCompra.indexOf(item)
    this.listaDeCompra[index].nome = nome
    this.atualizarLocalStorage()
  }

  atualizarLocalStorage() {
    localStorage.setItem('items', JSON.stringify(this.listaDeCompra));
  }
}

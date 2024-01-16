import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemQueVaiSerEditado!: Item
  editando = false
  textoBtn = 'Salvar item'
  valorItem!: string;

  constructor(private service: ListaDeCompraService) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes['itemQueVaiSerEditado'].currentValue)
    if (!changes['itemQueVaiSerEditado'].firstChange) {
      this.valorItem = this.itemQueVaiSerEditado?.nome
      this.editando = true;
      this.textoBtn = 'Editar item'
    }
  }

  adicionarItem() {
    this.service.addItemLista(this.valorItem)
    this.limparCampo()
  }

  atualizarItem() {
    this.service.updateTitleItem(this.itemQueVaiSerEditado!, this.valorItem)
    this.limparCampo()
    this.editando = false
    this.textoBtn = 'Salvar item'
  }

  limparCampo() {
    this.valorItem = '';
  }
}

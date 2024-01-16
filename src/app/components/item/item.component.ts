import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item
  @Output() emitindoItemParaEditar = new EventEmitter()
  @Output() emmitDelete = new EventEmitter()

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnDestroy(): void {
    console.log('me removeram')
  }

  editarClick() {
    this.emitindoItemParaEditar.emit(this.item)
  }

  deleteClick() {
    console.log('estão tentando me remover')
    this.emmitDelete.emit(this.item)
  }

  check() {
    this.item.comprado = !this.item.comprado
  }
}

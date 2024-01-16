import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {
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

  editarClick() {
    this.emitindoItemParaEditar.emit(this.item)
  }

  deleteClick() {
    this.emmitDelete.emit(this.item)
  }

  check() {
    this.item.comprado = !this.item.comprado
  }
}

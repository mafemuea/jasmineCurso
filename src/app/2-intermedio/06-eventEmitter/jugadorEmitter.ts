import { EventEmitter } from '@angular/core';
import { Jugador } from '../../1-basicas/05-clases/clase';
export class JugadorEmitter extends Jugador {
  vidaCambia = new EventEmitter<number>();

  constructor() {
    super();
  }

  emitDanio(danio: number) {
    const res = this.recibeDanio(danio);
    this.vidaCambia.emit(res);
  }
}

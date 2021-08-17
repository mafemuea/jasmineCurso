import { Subject } from 'rxjs';

export class ActivatedRouteFake {
  private subject = new Subject(); //Permite insertar valores a un observable

  push(valor: any) {
    this.subject.next(valor);
  }

  get params() {
    return this.subject.asObservable();
  }
}

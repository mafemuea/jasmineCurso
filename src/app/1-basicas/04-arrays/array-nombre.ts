export interface Persona {
  id: number;
  nombre: string;
  edad: number;
}

export class ArrayNombres {
  apuntados: Persona[] = [];

  anadePersona(persona: Persona) {
    this.apuntados.push(persona);
    //   this.apuntados = [...this.apuntados, persona]
  }

  borraPersona(id: number) {
    this.apuntados = this.apuntados.filter((data) => data.id !== id);
  }
}

export class Tarefa {
  id: number;
  titulo: string;
  descricao: string;
  concluido: string;

  constructor(id: number, titulo: string, descricao: string, concluido: string) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.concluido = concluido;
  }
}

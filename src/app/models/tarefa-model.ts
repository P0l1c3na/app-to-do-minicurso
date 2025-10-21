export class Tarefa {
  id: number;
  titulo: string;
  descricao: string;
  concluido: boolean;

  constructor(id: number, titulo: string, descricao: string, concluido: boolean) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.concluido = concluido;
  }
}

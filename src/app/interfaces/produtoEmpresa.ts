export interface ProdutoEmpresa {
     _id            : string;
     nomeEmpresa    : string;
     produto        : string;
     localColeta    : string;
     validadeProduto: Date;
     recolhido     : boolean
}
import React from "react";
import Botao from "@/components/Botao";
import { formatadorMoeda } from "@/utils/formatadorMoeda";
import "./Produto.css";

const Produto = ({
  src,
  id,
  alt,
  titulo,
  descricao,
  preco,
  adicionarProduto,
}) => {
  return (
    <div className="col-12 col-md-6 col-xxl-4 pb-4">
      <div className="card h-100"> 
        <div className="card-img-top-wrapper"> 
          <img className="card-img-top img-fluid" src={src} alt={alt} />
        </div>
        <div className="card-body d-flex flex-column justify-content-between"> 
          <div>
            <h5 className="card-title fw-bold">{titulo}</h5>
            <p className="card-text">{descricao}</p>
            <p className="fw-bold">{formatadorMoeda(preco)}</p>
          </div>
          <div>
            <Botao
              variant="primary"
              type="button"
              className="border-0"
              handleClick={() =>
                adicionarProduto({ src, alt, id, titulo, descricao, preco })
              }
            >
              Adicionar ao carrinho
            </Botao>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produto;

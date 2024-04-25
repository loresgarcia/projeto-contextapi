import React from "react";
import bannerCarrinho from "/assets/images/produtos/banner-carrinho.svg";

const BannerCarrinho = () => {
  return (
    <img
      className="custom-img"
      src={bannerCarrinho}
      alt="Imagem de uma sacola de compras"
    />
  );
};

export default BannerCarrinho;

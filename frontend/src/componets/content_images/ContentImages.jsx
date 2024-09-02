import React from 'react';
import style from "./images.module.css";
import j1 from "/public/imagens/jardinagem1.jpeg";
import j2 from "/public/imagens/jardinagem2.jpeg";
import j3 from "/public/imagens/jardinagem3.jpeg";
import j4 from "/public/imagens/jardinagem4.jpeg";


const lista_imagens = [j1, j2, j3, j4];

function ContentImagens() {
  return (
    <div className={style.container_imagem} >
      {lista_imagens.map((img, i) => (
        (i % 2 === 0) ? (
            <ImagemLeft key={i} imagem={img} />
        ) : (
            <ImagemRight key={i} imagem={img} />
        )
      ))}
    </div>
  );
}

function ImagemLeft({ imagem }) {
  return (
        <img className={`${style.content_imagem}`} src={imagem} alt="" />
  );
}

function ImagemRight({ imagem }) {
  return (
        <img className={`${style.content_imagem}`} src={imagem} alt="" />
  );
}

export default ContentImagens;

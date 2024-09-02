import style from "./contentTop.module.css"
import whats from "../../../public/icons/whatsapp.png"
import mail from "../../../public/icons/mail.png"
import insta from "../../../public/icons/instagram.png"
import { useState, useEffect } from "react";

const words = [
    'Análise do Solo',
    'Planejamento do Jardim',
    'Preparação do Solo',
    'Seleção de Plantas',
    'Plantio de Sementes e Mudas',
    'Transplante de Plantas',
    'Regagem',
    'Adubação',
    'Poda',
    'Controle de Pragas e Doenças',
    'Controle de Ervas Daninhas',
    'Aeração do Solo',
    'Mulching',
    'Design de Paisagismo',
    'Manutenção de Elementos de Paisagismo',
    'Instalação de Sistemas de Irrigação',
    'Limpeza de Áreas de Jardim',
    'Manutenção de Ferramentas',
    'Planejamento de Culturas Sazonais',
    'Preparação para Estações Específicas',
    'Criação de Hortas',
    'Jardinagem Vertical',
    'Manutenção de Jardins de Interior'
];

function ContentTop () {
    const typingSpeed = 150; 
    const deletingSpeed = 20;
    const pauseDuration = 1000; 
  
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0); 
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      let timer;
  
      if (isDeleting) {
        timer = setTimeout(() => {
          setText((prevText) => prevText.slice(0, -1));
          setCharIndex((prevIndex) => prevIndex - 1);
  
          if (charIndex <= 0) {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
            setCharIndex(0);
          }
        }, deletingSpeed);
      } else {
        timer = setTimeout(() => {
          if (charIndex < words[index].length) {
            setText((prevText) => prevText + words[index][charIndex]);
            setCharIndex((prevIndex) => prevIndex + 1);
          } else {
            setIsDeleting(true);
            setTimeout(() => {}, pauseDuration);
          }
        }, typingSpeed);
      }
  
      return () => clearTimeout(timer);
    }, [text, isDeleting, index, charIndex]);

    return (
        <div className={style.content_top_container} >

            <h2>{text}</h2>

            <div className={style.container_button_top}>
                <button className={`${style.button_content_top}`}>
                    <img className={style.img_icon} src={insta} alt="" />
                </button>

                <button className={`${style.button_content_top} ${style.circle_button}`}>
                    <img className={style.img_icon} src={whats} alt="" />
                </button>
                
                <button className={style.button_content_top}>
                    <img className={style.img_icon} src={mail} alt="" />
                </button>
            </div>

        </div>
    )
}


export default ContentTop
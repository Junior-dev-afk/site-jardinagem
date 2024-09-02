import style from "./contato.module.css"
import style2 from "../content_top/contentTop.module.css"
import whats from "../../../public/icons/whatsapp.png"
import mail from "../../../public/icons/mail.png"
import insta from "../../../public/icons/instagram.png"


function Contatos () {
    return (
        <div>
            <ButtonsContatos/>
            {enviarEmail()}
        </div>
    )
}

function ButtonsContatos () {
    return (
        <div className={style.container_buttons_bottom} >
            <button style={{backgroundColor:"rgb(79, 103, 80)"}} className={`${style2.button_content_top}`}>
                <img className={style2.img_icon} src={insta} alt="" />
            </button>

            <button style={{backgroundColor:"rgb(79, 103, 80)"}} className={`${style2.button_content_top} ${style2.circle_button}`}>
                <img className={style2.img_icon} src={whats} alt="" />
            </button>
            
            <button style={{backgroundColor:"rgb(79, 103, 80)"}} className={style2.button_content_top}>
                <img className={style2.img_icon} src={mail} alt="" />
            </button>
        </div>
    )
}

function enviarEmail () {
    return (
        <div className={style.container_contatos}>
            <input className={style.input_contato} placeholder="Seu nome..." type="text" />
            <input className={style.input_contato} placeholder="Seu email para contato..." type="text" />
            <textarea rows={10} className={style.text_area_contato} placeholder="Mensagem inicial de contato..." name="" id=""></textarea>
        </div>
    )
}


export default Contatos
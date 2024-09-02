import Contatos from "./componets/contato/Contato"
import ContentImagens from "./componets/content_images/ContentImages"
import ContentTop from "./componets/content_top/ContentTop"
import Header from "./componets/header/Header"

function App() {
    return (
        <div>
            <Header/>
            <ContentTop/>
            <ContentImagens/>
            <Contatos/>
        </div>
    )
}

export default App

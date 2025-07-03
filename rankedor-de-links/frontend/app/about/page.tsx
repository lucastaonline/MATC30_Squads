export default function About() {

    function Page(){
        return(
            <div >
        <div className="flex text-xl justify-center font-bold pb-15">
            Sobre
        </div>
        <div className="pb-40">
            Este aplicativo rankeia a performance de APIs com base nos críterios abaixo:    
            <div className="pl-10"><li className="font-bold">Performance:</li></div>
            A velocidade de resposta
            <div className="pl-10"><li className="font-bold">Design:</li></div>
            A visibilidade das funções disponíveis
            <div className="pl-10"><li className="font-bold">Usabilidade:</li></div>
            O quão fácil é requisitar as funções
            <div className="pl-10"><li className="font-bold">Segurança:</li></div>
            Quais as medidas de segurança implementadas
            <div className="pl-10"><li className="font-bold">SEO:</li></div>
            O quão fácil foi encontrar a API indexada em buscadores
            <br/>
            <div className="pt-10">Os resultados encontrados estão disponíveis em gráfios, tabelas e rankeamentos.</div>
        </div>
        <div className="flex    bottom-0">
            Aplicativo produzido em NEXT.js como um projeto conjunto para matéria MATC30 em 2025.1
        </div>
    </div>

        )
    }
    return <Page />
}

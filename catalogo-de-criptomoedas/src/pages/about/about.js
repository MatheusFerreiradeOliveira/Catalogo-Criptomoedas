import React from 'react';
import { HiArrowLeft } from "react-icons/hi";
import { useHistory } from 'react-router';
import './about.css';

export default function AboutPage() {

    const history = useHistory();

    const handleClickBack = (e) => {
        history.push(`/catalogo`);
    }

    return (
        <div className="mainDivAbout">
            <div className="topicDiv">
                <HiArrowLeft size={30} className="backIcon" onClick={handleClickBack}/>
                <h1>Criptomoedas</h1>
                <div>
                    <h2>O que é?</h2>
                    <p>Criptomoedas são moedas digitais porque, diferentemente do real, do dólar e de outras moedas que podem ser tocadas, elas só existem na internet. Ou seja, você sabe que elas são verdadeiras, mas não consegue pegá-las com as mãos – ou guardá-las na carteira, no cofre ou embaixo do colchão.</p>
                    <p>Criadas em uma rede blockchain porque é essa tecnologia que está por trás das criptomoedas. Basicamente, blockchain é um sistema que permite o envio e o recebimento de alguns tipos de informação pela internet. São pedaços de código gerados online que carregam informações conectadas, como blocos de dados que formam uma corrente – por isso o nome “corrente de blocos”.</p>
                    <p>E em sistemas de criptografia porque é essa camada de segurança, garantida pelo blockchain, que possibilita a emissão e a transação de moedas virtuais de forma mais segura – quando feito de forma correta. É dessa tecnologia, inclusive, que vem o nome criptomoeda – moeda criptografada.</p>
                </div>
                <div>
                    <h2>Criptomoedas são seguras?</h2>
                    <p>Um dos pilares das criptomoedas é a criptografia: uma camada de segurança online que dificulta bastante qualquer tipo de fraude.</p>
                    <p>O que pode acontecer – e já aconteceu – é as carteiras digitais ou corretoras de bitcoin serem roubadas. Em 2019, uma das maiores corretoras de criptomoedas do mundo informou que hackers haviam roubado US$40,7 milhões em bitcoins usando técnicas como phishing e vírus.</p>
                    <p>A falta de regulamentação das moedas digitais também pode ser um problema – e o próprio Banco Central do Brasil alerta sobre os riscos em seu site. Ataque de hackers, erros de servidor e perda da assinatura virtual são alguns dos riscos que podem acarretar na perda de todas as criptomoedas – e, consequentemente, de um alto valor financeiro. </p>
                </div>
            </div>
            <div className="source">
                <p><strong>Fonte</strong>: <a>https://blog.nubank.com.br/o-que-e-criptomoeda/</a></p>
            </div>
        </div>
    )
}


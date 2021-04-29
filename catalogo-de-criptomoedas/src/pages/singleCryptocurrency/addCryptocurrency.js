import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {
    FormControlLabel,
    TextField, 
    Checkbox,
    Button
} from '@material-ui/core';
import { HiArrowLeft } from "react-icons/hi";
import './addCryptocurrency.css'
import axios from 'axios';

export default function AddCryptocurrency(props) {
    
    const history = useHistory();
    const criptoId = props.location.state?.criptoId;
    
    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [value, setValue] = useState("");
    const [variation, setVariation] = useState("");
    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() => {
        if(Boolean(criptoId)) {
            axios.get(`https://api-catalogo-criptomoedas.herokuapp.com/cryptocurrencies/${criptoId}`)
                .then(response => {
                    setName(response.data.name);
                    setCode(response.data.code)
                    setValue(response.data.value);
                    setVariation(response.data.variation);
                    setImgUrl(response.data.imgUrl);
                    setIsFavourite(response.data.isFavourite);
                });
        }
    }, []);

    const handleClickBack = (e) => {
        history.push(`/catalogo`);
    }

    const handleChangeName = (e) => {
        setName(e.target.value.trim());
    }

    const handleChangeCode = (e) => {
        setCode(e.target.value.trim());
    }

    const handleChangeValue = (e) => {
        setValue(e.target.value);
    }

    const handleChangeVariation = (e) => {
        setVariation(e.target.value);
    }

    const handleChangeImg = (e) => {
        setImgUrl(e.target.value);
    }

    const handleChangeIsFavourite = (e) => {
        setIsFavourite(e.target.checked);
    }

    const handleSubmit = (_) => {
        let finalObj = {
            name,
            code,
            value,
            variation,
            isFavourite,
            imgUrl
        };

        axios.post(`https://api-catalogo-criptomoedas.herokuapp.com/cryptocurrencies`, finalObj).then(_ => {
            history.push(`/catalogo`);
        });
    }

    const handleEdit = (_) => {
        let finalObj = {
            name,
            code, 
            value, 
            variation,
            isFavourite,
            imgUrl
        };

        axios.patch(`https://api-catalogo-criptomoedas.herokuapp.com/cryptocurrencies/${criptoId}`, finalObj).then(_ => {
            history.push(`/catalogo`);
        });
    }

    return (
        <div className="mainDiv">
            <div className="criptoForm">
                <HiArrowLeft size={30} className="backIcon" onClick={handleClickBack}/>
                <h4 className="title">{criptoId ? "Atualizar Criptomoeda" : "Cadastrar Criptomoeda"}</h4>
                <TextField
                    required
                    type="text"
                    id="name-required"
                    label="Nome"
                    placeholder="Nome da criptomoeda"
                    value={name}
                    onChange={handleChangeName}
                    variant="outlined"
                    style={{marginBottom: "3%"}}
                />
                <TextField
                    required
                    type="text"
                    id="name-required"
                    label="Código"
                    placeholder="Código da criptomoeda"
                    value={code}
                    onChange={handleChangeCode}
                    variant="outlined"
                    style={{marginBottom: "3%"}}
                />
                <TextField
                    required
                    type="number"
                    id="valor-required"
                    label="Valor"
                    placeholder="Valor em dolar (U$)"
                    value={value}
                    onChange={handleChangeValue}
                    variant="outlined"
                    style={{marginBottom: "3%"}}
                />
                <TextField
                    required
                    type="number"
                    id="variation-required"
                    label="Variação (%)"
                    placeholder="Variação semanal (%)"
                    value={variation}
                    onChange={handleChangeVariation}
                    variant="outlined"
                    style={{marginBottom: "3%"}}
                />
                <TextField
                    required
                    type="text"
                    id="valor-required"
                    label="Imagem"
                    placeholder="Link (URL) da imagem."
                    value={imgUrl}
                    onChange={handleChangeImg}
                    variant="outlined"
                    
                />
                <FormControlLabel
                    control={<Checkbox name="favourite" />}
                    checked={isFavourite}
                    onChange={handleChangeIsFavourite}
                    label="Favorito"
                />
                <Button type="submit" onClick={criptoId ? handleEdit : handleSubmit} variant="outlined" color="primary">{criptoId ? "Alterar" : "Adicionar"}</Button>
            </div>
        </div>
    )
}
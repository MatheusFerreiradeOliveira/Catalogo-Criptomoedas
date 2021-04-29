import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {Button, Grid, TextField, FormControlLabel, Checkbox} from '@material-ui/core';
import './catalog.css'
import axios from 'axios';
import Cryptocard from '../../components/cryptocard';

export default function Catalog() {

    const history = useHistory();

    const [criptocurrencies, setCriptocurrencies] = useState([]);
    const [criptocurrenciesFiltered, setCriptocurrenciesFiltered] = useState([]);

    useEffect(() => {
        axios.get(`https://api-catalogo-criptomoedas.herokuapp.com/cryptocurrencies`)
            .then(response => {
                setCriptocurrencies(response.data);
                setCriptocurrenciesFiltered(response.data);
            })
    }, [])

    const handleChangeSearch = (e) => {
        let searchValue = e.target.value.trim();
        
        if(searchValue === "") {
            setCriptocurrenciesFiltered(criptocurrencies);
        } else {
            setCriptocurrenciesFiltered(criptocurrencies.filter(cripto => {
                return cripto.name.includes(searchValue);
            }));
        }
    }

    const handleSearchFavourites = (e) => {
        if(Boolean(e.target.checked)) {
            setCriptocurrenciesFiltered(criptocurrenciesFiltered.filter(cripto => {
                return cripto.isFavourite === true;
            }))
        } else {
            setCriptocurrenciesFiltered(criptocurrencies);
            document.getElementById("search-by-name").value = "";
        }
    }

    const handleSelectCard = (criptoId) => {
        history.push(`/catalogo/criptomoeda`, {'criptoId': criptoId});
    }

    const handleClickAddButton = (e) => {
        history.push(`/catalogo/criptomoeda`);
    }

    const handleClickInfoButton = (e) => {
        history.push(`/catalogo/sobre`);
    }

    return (
        <div className="mainDivCatalog">
            <div style={{display: 'flex', justifyContent: 'center', margin: '1.5% 1% 1% 1%'}}>
                <TextField color="primary" id="search-by-name" label="Pesquise por nome" variant="outlined" onChange={handleChangeSearch} />
                <FormControlLabel
                    control={<Checkbox name="favourite" />}
                    onChange={handleSearchFavourites}
                    style={{marginLeft: "1%"}}
                    label="Favorito"
                />
            </div>
            <Grid container wrap lg={12} justify="center" spacing={2}>
                {criptocurrenciesFiltered?.map((cripto) => 
                    <Grid key={criptocurrenciesFiltered.indexOf(cripto)} onClick={((e) => handleSelectCard(cripto._id))} item xs={4}>
                        <Cryptocard data={cripto}/>
                    </Grid>
                )}
            </Grid>
            <div className="footer">
                <Button onClick={handleClickAddButton} variant="outlined" color="primary"><strong>Adicionar criptomoeda</strong></Button>
                <Button onClick={handleClickInfoButton} style={{marginLeft: "1%"}} variant="outlined" color="primary"><strong>O que é uma criptomoeda ?</strong></Button>
            </div>
        </div>
    )
}
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

// ************* Components *************
import Error from './Error';

// ************* Data *************
import { currencies } from '../data/currencies';

// ************* Hooks *************
import useSelectCurrency from '../hooks/useSelectCurrency';

// ******** Styled Components ********
const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    margin-top: 30px;
    transition: background-color 0.3s ease;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`;



const Form = ({setCurrencies}) => {
    const [ cryptosAPI, setCryptosAPI ] = useState([]);
    const [ error, setError ] = useState(false);

    const [ currency, SelectCurrency ] = useSelectCurrency('Select your Currency', currencies);
    const [ crypto, SelectCrypto ] = useSelectCurrency('Select your Cryptocurrency', cryptosAPI);

    useEffect(() => {
        const fetchAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
            const response = await fetch(url);
            const result = await response.json();
            const arrayCryptos = result.Data.map(crypto => {
                const obj = {
                    id: crypto.CoinInfo.Name,
                    name: crypto.CoinInfo.FullName
                }
                return obj;
            });
            setCryptosAPI(arrayCryptos);
        };
        fetchAPI();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        if([currency, crypto].includes('')){
            setError(true);
            return;
        }
        setError(false);
        setCurrencies({
            currency,
            crypto
        });
    }

    return (
        <>
            {error && 
                <Error>
                    Both fields are required
                </Error>
            }
            <form
                onSubmit={ handleSubmit }
            >
                <SelectCurrency />
                <SelectCrypto />
                <InputSubmit type="submit" value="Quote" />
            </form>
        </>
    )
}

export default Form;
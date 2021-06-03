import Coin from "../components/Coin";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import './CryptoCurrencyPage.css';


function CryptoCurrencyPage()
{const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
            )
            .then(res => {
                setCoins(res.data);
                console.log(res.data);
            })
            .catch(error => console.log(error));
    }, []);

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className='coin-app'>
            <div className='coin-search'>
                <h1 className='coin-text'>Search a currency</h1>
                <form>
                    <input
                        className='coin-input'
                        type='text'
                        onChange={handleChange}
                        placeholder='Search'
                    />
                </form>
            </div>
            <div className='coin-title-row'>
                <div className='coin'>
                    Coin Name
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>Price</p>
                    <p className='coin-volume'>Volume</p>
                    <p className='coin-percent'>Price Change</p>
                    <p className='coin-marketcap'>MarketCap</p>
                </div>
            </div>
            {filteredCoins.map(coin => {
                return (
                    <>
                        <Coin
                            key={coin.id}
                            name={coin.name}
                            price={coin.current_price}
                            symbol={coin.symbol}
                            marketcap={coin.total_volume}
                            volume={coin.market_cap}
                            image={coin.image}
                            priceChange={coin.price_change_percentage_24h}
                        />
                    </>

                );
            })}
        </div>
    );
}


export default CryptoCurrencyPage

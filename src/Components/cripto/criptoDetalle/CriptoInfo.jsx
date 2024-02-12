import PropTypes from 'prop-types';

const CriptoInfo = ( { cripto }) => {
   
        return (
            <div className="info">
            <div className="main-info">
                <span>Ranking: {cripto.rank}</span>
                <h1>{cripto.name}</h1>
                <span className="symbol">{cripto.symbol}</span>
            </div>
            <div className="details">
                <ul>
                    <li className="detail">
                        <span className="label">Precio: </span>
                        <span>{cripto.priceUsd}</span>
                    </li>
                    <li className="detail">
                        <span className="label">MaxSupply: </span>
                        <span>{cripto.maxSupply}</span>
                    </li>
                    <li className="detail">
                        <span className="label">Market Cap (USD): </span>
                        <span>{cripto.marketCapUsd}</span>
                    </li>
                    <li className="detail">
                        <span className="label">Volumen (USD - 24 Hrs.): </span>
                        <span>{cripto.volumeUsd24Hr}</span>
                    </li>
                    <li className="detail">
                        <span className="label">Variación (24 Hrs.): </span>
                        <span>{cripto.changePercent24Hr}</span>
                    </li>
                    <li className="detail">
                        <span className="label">Vwap 24 Hrs.: </span>
                        <span>{cripto.vwap24Hr}</span>
                    </li>
                </ul>
            </div>
        </div>
        )

}

CriptoInfo.propTypes = {
    cripto: PropTypes.object.isRequired,
};


export default CriptoInfo
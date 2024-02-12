import PropTypes from 'prop-types';

const CriptoHistory = ( {history}) => {
   return (
    <div className="history">
        <table>
        <thead>
            <tr>
                <th>Fecha</th>
                <th>Precio</th>
            </tr>
        </thead>
        <tbody>
            {history.map(({date, priceUsd, time}) => (
                <tr key={time}>
                <td className="label">{new Date(date).toDateString()}</td>
                <td className="price">{priceUsd}</td>
                </tr>
            ))}
        </tbody>
        </table>
    </div>
   )
}

CriptoHistory.propTypes = {
    history: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CriptoHistory
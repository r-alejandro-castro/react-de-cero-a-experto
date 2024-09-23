// export const FirstApp = () => <h1>Firts App</h1>

import PropTypes from 'prop-types';

export const FirstApp = ({title,subtitle}) => {     

    return (
        <>  
            <h1 data-testid="test-title">{ title }</h1>

            <h3>{ subtitle }</h3>
            <h3>{ subtitle }</h3>
        </>
    )
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

// FirstApp.defaultProps = {
//     title: 'No hay titulo',
// }
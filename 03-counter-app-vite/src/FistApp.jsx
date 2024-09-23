// export const FirstApp = () => <h1>Firts App</h1>

import PropTypes from 'prop-types';

export const FirstApp = ({title,title1}) => {

    return (
        <>  
            <h1>{ title }</h1>

            <h3>{ title1 }</h3>
        </>
    )
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    title1: PropTypes.string
}

// FirstApp.defaultProps = {
//     title: 'No hay titulo',
// }
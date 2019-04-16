import React from 'react';
import loadingGif from '../../img/loading.gif';

const LoadingPage = () => {
    return(
        <div className="row justify-content-center">
            <img src={loadingGif} alt="Loading..."/>
        </div>
    )
}

export default LoadingPage; 
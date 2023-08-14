import React from 'react';

function BotaoAviso(props){
    return(
        <button className="btn btn-warning">{props.text}</button>
    );
}

export default BotaoAviso;

import React from 'react';

function InputPadrão(props){
    return(
<input type="text" placeholder={props.text} class="input input-bordered w-full max-w-xs" />    );
}

export default InputPadrão;

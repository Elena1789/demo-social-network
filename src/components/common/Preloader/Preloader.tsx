import React from 'react';
import preloader from '../../../assets/images/preloader.svg';

type PropsType = {}

let Preloader: React.FC = (props) => {
return  <div>
    <img src={preloader} /> 
   </div>
}

export default Preloader;
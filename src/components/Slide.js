import React from 'react';
import InfoList from './InfoList';

const SliderInfo = () => (
  <div>
    <button className="btn left"><i class="fas fa-arrow-alt-circle-left fa-2x"></i></button>
    <center><InfoList/></center>
    <button className="btn right"><i class="fas fa-arrow-alt-circle-right fa-2x"></i></button>
  </div>
)


export default SliderInfo; 
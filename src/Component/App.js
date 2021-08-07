import React from 'react';
import theImge from './last_img.jpg'
import Header from './Header'
import Text from './Text'

function App(){
  return(
    <div>
<img scr={theImge} className="img" alt=""/>

        <Header/>
        <Text/>
        
</div>
  );
}
export default App
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UseApiEffectComponent from './UseApiEffectComponent';

const ParentComponent = () => {
    const [id,setId] = useState(1);

    return (
        <div>
            <button type='button' onClick={() => setId(1)}>Post 1</button>
            <button type='button' onClick={() => setId(2)}>Post 2</button>
            <button type='button' onClick={() => setId(3)}>Post 3</button>
            {id === 1 && <UseApiEffectComponent id="1" />}
            {id === 2 && <UseApiEffectComponent id="2" />}
            {id === 3 && <UseApiEffectComponent id="3" />}
        </div>
    );
};

export default ParentComponent;
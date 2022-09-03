import React from 'react';
import useApiEffect from './useApiEffect';

const UseApiEffectComponent = ({ id }) => {
    // const [data,setData] = useState({});

    const [data,error,loading] = useApiEffect(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        { method: 'get'},
        null,
        null,
        err => {
            console.log({err});
        }
    );
    
    
    return (
        <div>
            {
                loading
                ?
                'Loading...'
                :
                data 
                &&
                <>
                    <p><strong>Post Id: </strong> {data.id}</p>
                    <p><strong>Post Title</strong>{data.title}</p>
                </>
            }
        </div>
    );
};

export default UseApiEffectComponent;
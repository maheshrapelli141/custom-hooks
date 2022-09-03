import React from "react";

export default function useApiEffect(url,options,payload,onAbortHandler,apiErrorHandler) {
    const [loading,setLoading] = React.useState(null);
    const [data,setData] = React.useState(null);
    const [error,setError] = React.useState(null);

    React.useEffect(() => {
        setLoading(true);
        const controller = new AbortController();
        options.signal = controller.signal;
        if(options.method.toLowerCase() === 'post'){
            options.body = JSON.stringify(payload);
        }
        fetch(url,options)
            .then(resp => resp.json())
            .then(resp => {
                setData(resp);
                setLoading(false);
            })
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('handle Component unmounted before api resolution');
                    typeof onAbortHandler === 'function' && onAbortHandler();
                } else {
                    console.log('api error');
                    typeof apiErrorHandler === 'function' && apiErrorHandler(err);
                    setError(err)
                }
                setLoading(false);
            });
        return () => {
            console.log('unmounting');
            setLoading(false);
            controller.abort();
        }
    },[]);
    return [data,error,loading];
}
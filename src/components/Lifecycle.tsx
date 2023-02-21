import { FC, useCallback, useEffect, useState } from "react";

const Lifecycle:FC = () => {
    console.log("Component init");

    const [title, setTitle] = useState("Lifecycle");

    const func = useCallback((str: string) => {
        console.log(str)
    }, [])
    
    const func2 = (str: string) => {
        console.log(str + str)
    }

    // componentDidMount
    useEffect(() => {
        func("test");
        func2("test2");
        setTimeout(() => {
            setTitle("new title");
        }, 1000);
        
    }, [func]);

    // componentDidUpdate
    useEffect(() => {
        console.log("componentDidUpdate");
        //setTitle("Lifecycle new");
    });

     // componentWillUnmount
     useEffect(() => {
         return () => {
             console.log("componentWillUnmount");
         }
     }, []);

    return <h1>{title}</h1>;
};

export default Lifecycle;
import React from "react";

const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1>This is React! {props.greeting} {"\n"} 
    My name is {props.name} and I'm {props.age}</h1>; 
}

export default FunctionalGreetingWithProps;
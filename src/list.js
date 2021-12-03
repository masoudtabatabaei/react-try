function LiGenerator(props){
    return (
        <li>{props.car}</li>
    );
}

function Cars(){
    const cars = ["a" , "b" , "c"];
    return (
        <ul>
            {cars.map((car) => <LiGenerator car={car}/>)}
        </ul>
    );
}

export {Cars};
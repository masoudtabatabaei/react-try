function BoilingVerdict({celsius}){
    console.log({celsius});
    if (celsius >= 100) {
       return <p>The water would boil.</p>;
    }

    return <p>he water would not boil.</p>;
}

export default BoilingVerdict;
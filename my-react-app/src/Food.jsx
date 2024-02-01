function Food(){
    //If the user needs to write JS code within the return statement,  they can use curly braces {} instead of parentheses (). 
    //If the user needs to write JS code outside the return statement, the need for curly braces is not necessary.
    const food1 = "Orange";
    const food2 = "Banana";
    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food;
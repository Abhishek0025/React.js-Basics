import PropTypes from 'prop-types'
function List(props){
    // const fruits = [{id: 1, name: "apple", calories: 95}, 
    //                 {id: 2, name: "orange", calories: 45},
    //                 {id: 3, name: "banana", calories: 105},
    //                 {id: 4, name: "grape", calories: 159},
    //                 {id: 5, name: "papaya", calories: 37}]; //Convert array of string to array of list item elements

    // fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL

    // fruits.sort((a,b) => a.calories -  b.calories); //Sort by calories ascending
    // fruits.sort((a,b)  => b.calories - a.calories); //reverse  the list of fruits

    //Check for fruits having calories less than 100
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    //Check for fruits having calories greater than 100
    // const highCalFruits = fruits.filter(fruits => fruits.calories >= 100);


    //*********************** */
    //TRANSFORM THIS LIST COMPONENTS SO THAT IT IS REUSABLE WITH DIFFERENT LISTS
    //Go to App component, paste the list of fruits and then pass it as props to the list component

    //access props
    const category = props.category;
    const itemList = props.items;
    //Now list is reusable component
    //Convert array of strings to array of object. Each object will hae a name property, calories per serving
    const listItems = itemList.map(item => <li key={item.id}>
                                                    {item.name}: &nbsp;
                                                    <b>{item.calories}</b></li>) //for each fruit, make this list of fruits present by adding .name, and since wach name is unique, there is a warning shown as Each child in a list should have a unique "key" prop. In this case, add a key={fruit.name} inside the <li>


    return(<>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
    </>);
}

List.proptypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number})),
}

List.defaultProps = {
    category: "Category",
    items: [],
}
export default List;
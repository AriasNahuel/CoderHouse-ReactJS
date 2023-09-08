import './ItemListContainer.css'
const ItemListContainer = ({ greeting }) => {
    return ( <>
    <div className='divItem'>
    <h1>{greeting}</h1>
    </div>    
    </> );
}

export default  ItemListContainer;
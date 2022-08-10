import React from 'react';
import { REMOVE_FROM_CHECKOUT } from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';
import { idbPromise } from "../../utils/helpers";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Card, CardTitle, CardText, CardBody, CardImg } from 'reactstrap';

const Checkout = ({ item }) => {
    const [state, dispatch] = useStoreContext();
    const removeFromcheckout = () => {
        dispatch({
            type: REMOVE_FROM_CHECKOUT,
            _id: item._id
        });
        idbPromise('checkout', 'delete', { ...item });
    };

    return (

       <section>
        <h2>Hey</h2>
       </section>

    )
}

export default Checkout;
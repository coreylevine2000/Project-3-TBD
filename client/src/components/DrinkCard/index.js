import React from 'react';
import { ADD_TO_CART} from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, Collapse, Card, CardTitle, CardText, CardBody, CardImg, UncontrolledPopover, PopoverHeader } from 'reactstrap';
function DrinkCard({ item }) {
    const [show, setShow] = React.useState(false);
    const [customize, setCustomize] = React.useState({milk:"", flavor:"", size:""})
    const handleToggle = () => setShow(!show);
    const [state, dispatch] = useStoreContext();
    const { cart } = state;
    const {

        _id,

    } = item;

    const onChange = (e) => {
        const {name, value} = e.target
        setCustomize({...customize, [name]: value })
    }

    const addToCart = () => {
        // const customize = 
        // find the cart item w/ a matching id
        const itemInCart = cart.find((cartItem) => cartItem._id === _id);
            item.customize = customize;
            console.log("_______")
            console.log(item);
            dispatch({
                type: ADD_TO_CART,
                item: { ...item}
            });
            idbPromise('cart', 'put', { ...item});
        }
        console.log(cart);

    return (
        <div flexWrap="wrap" alignItems="center" justifyContent="center" maxW="500px" m="10">
            <Card flexShrink="0" maxW="lg" bg="white.2" textAlign="center" flexBasis={['auto', '80%']}
                width={[
                    "100%", // base
                    "50%", // 480px upwards
                    "25%", // 768px upwards
                    "15%", // 992px upwards
                ]}>
                <CardImg src={item.image} mt="10%" />
                <CardBody p="4">
                    <CardTitle mt="1" fontWeight="semibold" as="h3" lineHeight="tight" >
                        {item.name} &nbsp;
                    ${item.price}
                    </CardTitle>
                    <CardText as="span" fontSize="sm">
                        {item.description}
                    </CardText>

                    <Button id="PopoverFocus" type="button" className="m-2" 
                        onClick={addToCart}>
                        Add to Tab
                    </Button>
                    <Button className="m-2"
                    onClick={handleToggle}
                        >
                        Customize
                    </Button>{'  '}
                    <Collapse mt={4} isOpen={show}>
                        <Form>
                            <FormGroup>
                                <Label for="exampleSelect">Select Size</Label>
                                <Input type="select" name="size" id="exampleSelect" onChange={onChange}>
                                    <option>Select</option>
                                    <option>Single</option>
                                    <option>Double</option>
                                </Input>
                                <Label for="exampleSelect">Temperature</Label>
                                <Input type="select" name="milk" id="exampleSelect" onChange={onChange}>
                                    <option>Select</option>
                                    <option>No Ice</option>
                                    <option>Ice</option>
                                    <option>Room Temp</option>
                                    <option>Hot</option>
                                </Input>
                                <Label for="exampleSelect">Add Garnish</Label>
                                <Input type="select" name="flavor" id="exampleSelect" onChange={onChange}>
                                    <option>Select</option>
                                    <option>None</option>
                                    <option>Cherry</option>
                                    <option>Orange</option>
                                </Input>
                            </FormGroup>
                            </Form>
                            
                    </Collapse>
                    <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
                        <PopoverHeader>Item added to Tab!</PopoverHeader>   
                    </UncontrolledPopover>
                   
                </CardBody>
            </Card>
        </div>
    );
}
export default DrinkCard;
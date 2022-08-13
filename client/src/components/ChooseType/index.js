import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DrinkList from '../DrinkList';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


// import React, { useEffect } from 'react';
// import { useQuery } from '@apollo/react-hooks';
// import { useStoreContext } from '../../utils/GlobalState';
// import { UPDATE_OPTIONS, UPDATE_CURRENT_OPTION} from '../../utils/actions';
// import { QUERY_OPTIONS } from '../../utils/queries';
// import { idbPromise } from '../../utils/helpers';
// import { Button, Container, Row, Col } from 'react-bootstrap';

function ChooseType() {

  const [key, setKey] = useState('cocktail');

  return (
    <div class="choose-type">
      <Tabs
        id="drink-type-tab"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        fill>
        <Tab className="purple-tab" eventKey="cocktail" title="Cocktail">
          <DrinkList drinkType="cocktail"/>
        </Tab>
        <Tab className="purple-tab" eventKey="beer" title="Beer">
          <DrinkList drinkType="beer"/>
        </Tab>
        <Tab className="purple-tab" eventKey="non-alcoholic" title="Non-Alcoholic">
          <DrinkList drinkType="non-alcoholic"/>
        </Tab>
      </Tabs>
    </div>



      // <ButtonGroup size="lg" className="mb-2">
      //   <Button className="purple-button">Cocktail</Button>
      //   <Button className="purple-button">Beer</Button>
      //   <Button className="purple-button">Non-Alcoholic</Button>
      // </ButtonGroup>
  );
}


// function ChooseType() {
//     const [state, dispatch] = useStoreContext();

//     const { options } = state;

//     const { loading, data: optionData } = useQuery(QUERY_OPTIONS);

//     useEffect(() => {
//         if (optionData) {
//             dispatch({
//                 type: UPDATE_OPTIONS,
//                 options: optionData.options
//             });
//             optionData.options.forEach(option => {
//                 idbPromise('options', 'put', option);
//             });
//         } else if (!loading) {
//             idbPromise('options', 'get').then(options => {
//                 dispatch({
//                     type: UPDATE_OPTIONS,
//                     options: options
//                 });
//             });
//         }
//     }, [optionData, loading, dispatch]);

//     const handleClick = id => {
//         dispatch({
//             type: UPDATE_CURRENT_OPTION,
//             currentOption: id
//         });
//     };

//     return (
//         <Container>
//                 <Row className='text-center'>
//                     <Col>
//             {options.map(item => (
//                 <Button type="button"
//                     variant="secondary"
//                     lineHeight="1"
//                     size="lg"
//                     className="m-2" 
//                     key={item._id}
//                     onClick={() => {
//                         handleClick(item._id);
//                     }}
//                 >
//                     {item.name}
//                 </Button>
                
//             ))}
//             </Col>
//         </Row>
//         </Container>
//     );
//   };

// const styles = {
//   buttonStyle: {
//     background: 'Purple',
//   },
// };

// var ChooseType = () => {
//   return (
//     <Tabs
//       id="drink-type-tab"
//       activeKey={key}
//       onSelect={(k) => setKey(k)}
//       className="mb-3">
//       <Tab className="purple-button" eventKey="cocktail" title="Cocktail">
//         <DrinkList />
//       </Tab>
//       <Tab className="purple-button" eventKey="beer" title="Beer">
//         <DrinkList />
//       </Tab>
//       <Tab className="purple-button" eventKey="non-alcoholic" title="Non-Alcoholic" disabled>
//         <DrinkList />
//       </Tab>
//     </Tabs>



//       // <ButtonGroup size="lg" className="mb-2">
//       //   <Button className="purple-button">Cocktail</Button>
//       //   <Button className="purple-button">Beer</Button>
//       //   <Button className="purple-button">Non-Alcoholic</Button>
//       // </ButtonGroup>
//   );
// }

export default ChooseType;

// var ChooseType = () => {
//   return (
//     <>
//       <ButtonGroup size="lg" className="mb-2">
//         <Button>Liquor</Button>
//         <Button>Beer</Button>
//         <Button>Non-Alcoholic</Button>
//       </ButtonGroup>
  
//     </>
//   );
// }


// export default ChooseType
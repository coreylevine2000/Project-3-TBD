import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


// import React, { useEffect } from 'react';
// import { useQuery } from '@apollo/react-hooks';
// import { useStoreContext } from '../../utils/GlobalState';
// import { UPDATE_OPTIONS, UPDATE_CURRENT_OPTION} from '../../utils/actions';
// import { QUERY_OPTIONS } from '../../utils/queries';
// import { idbPromise } from '../../utils/helpers';
// import { Button, Container, Row, Col } from 'react-bootstrap';


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

const styles = {
  buttonStyle: {
    background: 'Purple',
  },
};

var ChooseType = () => {
  return (
    <>
      <ButtonGroup size="lg" className="mb-2">
        <Button style={styles.buttonStyle}>Liquor</Button>
        <Button style={styles.buttonStyle}>Beer</Button>
        <Button style={styles.buttonStyle}>Non-Alcoholic</Button>
      </ButtonGroup>
  
    </>
  );
}

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
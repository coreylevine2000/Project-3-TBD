import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_OPTIONS, UPDATE_CURRENT_OPTIONS } from '../../utils/actions';
import { QUERY_OPTIONS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { Button, Container, Row, Col } from 'react-bootstrap';


function Menu() {
    const [state, dispatch] = useStoreContext();

    const { options } = state;

    const { loading, data: optionsData } = useQuery(QUERY_OPTIONS);

    useEffect(() => {
        if (optionsData) {
            dispatch({
                type: UPDATE_OPTIONS,
                options: optionsData.options
            });
            optionsData.options.forEach(options => {
                idbPromise('options', 'put', options);
            });
        } else if (!loading) {
            idbPromise('options', 'get').then(options => {
                dispatch({
                    type: UPDATE_OPTIONS,
                    options: options
                });
            });
        }
    }, [optionsData, loading, dispatch]);

    const handleClick = id => {
        dispatch({
            type: UPDATE_CURRENT_OPTIONS,
            currentCategory: id
        });
    };

    return (
        <Container>
                <Row className='text-center'>
                    <Col>
            {options.map(item => (
                <Button type="button"
                    variant="secondary"
                    lineHeight="1"
                    size="lg"
                    className="m-2" 
                    key={item._id}
                    onClick={() => {
                        handleClick(item._id);
                    }}
                >
                    {item.name}
                </Button>
                
            ))}
            </Col>
        </Row>
        </Container>
    );
}

export default Menu;


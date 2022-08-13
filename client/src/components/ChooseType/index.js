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



  );
};

export default ChooseType;


import React, { useState } from 'react';

import NavTabs from '../NavTabs/NavTabs';
import Beer from '../../pages/Beer';
import Liquor from '../../pages/Liquor';
import NonAlcoholic from '../../pages/NonAlcoholic';

// const ChooseType = () => {

  export default function ChooseType() {
    const [currentPage, setCurrentPage] = useState('Home');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Beer') {
        return <Beer />;
      }
      if (currentPage === 'Liquor') {
        return <Liquor />;
      }
      if (currentPage === 'NonAlcoholic') {
        return <NonAlcoholic />;
      }
      return <Beer />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
  }
  

  // return (
  //   <>
  //     <ButtonGroup size="lg" className="mb-2">
  //       <Button>Liquor</Button>
  //       <Button>Beer</Button>
  //       <Button>Non-Alcoholic</Button>
  //     </ButtonGroup>
  
  //   </>
  // );


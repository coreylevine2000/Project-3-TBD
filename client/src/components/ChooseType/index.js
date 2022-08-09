import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ChooseType = () => {

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };
  
  return (
    <>
      <ButtonGroup size="lg" className="mb-2">
        <Button>Liquor</Button>
        <Button>Beer</Button>
        <Button>Non-Alcoholic</Button>
      </ButtonGroup>
  
    </>
  );
}


export default ChooseType;
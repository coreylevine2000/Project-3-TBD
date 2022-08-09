import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

var ChooseType = () => {
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
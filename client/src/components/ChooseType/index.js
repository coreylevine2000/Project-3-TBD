import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

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
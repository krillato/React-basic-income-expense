import PropTypes from "prop-types";
import './items.css'
import { Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DataContext from "../data/DataContext";
import { useContext } from "react";
const Items = (props) => {
  const { title, amount } = props;
  const status = amount < 0 ? "expense" : "income";
  const name = useContext(DataContext)
  const {income, expense} = useContext(DataContext)
  return (
      
    <Container >
      <Card body  className={status}>
          <h4> 
              <p>TeeTime : </p>
              {/* <DataContext.Consumer>
                {value=><p>{value} : </p>}
            </DataContext.Consumer> */}
          </h4>
        <h3 >
            
             {title} <span className="float-end">  {amount} </span> 
             

        </h3>
      </Card>
    </Container>
  );
};

Items.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};
export default Items;

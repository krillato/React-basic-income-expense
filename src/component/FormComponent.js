import { useState,useEffect } from "react";
import "./FormComponent.css";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  Card,
  Form,
  FormGroup,
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Row
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FormComponent = (props) => {
  /* กำหนด State */
  console.log("Render Form Component"); //เกิดขึ้นเมื่อมีการเปลี่ยนแปลง
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [formValid,setFormValid] = useState(false);

  const inputTitle = (e) => {
    setTitle(e.target.value); //เก็บค่าลงใน state
    console.log(e.target.value);
  };
  const inputAmount = (e) => {
    setAmount(e.target.value); //เก็บค่าลงใน state
    console.log(e.target.value);
  };

  const saveItem = (e) => {
    e.preventDefault();
    const itemData = {
      id: uuidv4,
      title: title,
      amount: Number(amount),
    };
    props.onAddItem(itemData);
    //console.log(itemData);
    setTitle("");
    setAmount(0);
  };

  useEffect(()=>{  //ตรวจสอบค่าเมื่อมีการเปลี่ยนแปลง
    const checkData = title.trim().length>0 && amount!==0
    /* if(checkData){
        setFormValid(true)
    } */ // ใช้อีกแบบก็ได้
    setFormValid(checkData)
  },[amount,title]) //เมื่อป้อนให้ดักการทำงานในช่อง amount

 
  return (
    <div>
        
      {/* <Navbar bg="dark" variant="dark" expand="lg">
        
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        
      </Navbar> */}
      <Container>
      <Form bg="dark" variant="dark" className="my-4" onSubmit={saveItem}>
        <Container className="">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label> <h2>ชื่อรายการจ้า</h2></Form.Label>
            <Form.Control
              type="text"
              placeholder="ระบุรายการสิ"
              onChange={inputTitle}
            />
            <Form.Text className="text-muted">
              *กรุณาใส่ชื่อรายการ
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword" >
            <Form.Label><h2>จำนวนเงิน</h2></Form.Label>
            <Form.Control type="number"
              placeholder="ระบุจำนวนเงิน"
              onChange={inputAmount} />
              <Form.Text className="text-muted">
              * รายการเครื่องหมาย ( - คือรายจ่าย, ไม่ใส่คือรายรับ)
            </Form.Text>
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check />
          </Form.Group> */}
          <Button variant="primary" className="btn " type="submit" disabled={!formValid}> {/* ล็อคปุ่ม */}
            เพิ่มข้อมูล
          </Button>
        </Container>
      </Form>

        <Row>
            <Card className="text-center bg-success text-white my-4 py-3 ">
            <Card.Body>
                <h2>แสดงรายรับรายจ่ายทั้งหมด ทุกรายการ</h2>
            </Card.Body>
      </Card>
        </Row>
        </Container>
      
      {/* <form onSubmit={saveItem}>
           
                <div className="form-control">
                    <label>ชื่อรายการจ้า</label>
                    <input type="text" placeholder="ระบุรายการของเจ้า" onChange={inputTitle}></input>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="ระบุจำนวนเงิน" onChange={inputAmount}></input>
                </div>
                <div>
                    <button className='btn' type="submit">เพิ่มข้อมูล</button>
                </div>
            </form> */}
    </div>
  );
};

export default FormComponent;

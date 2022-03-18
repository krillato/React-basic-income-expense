import Items from "./items";
import {} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Transection = (props) => {
    const {items} = props // รับค่าที่ส่งมาใน items

    //console.log(props);
    return (
        <div>
                <ul>
                {items.map((e)=>{
                    return  <Items {...e} key={e.id} />
                })} 
            </ul>

            
        </div>
        
    );
}

export default Transection
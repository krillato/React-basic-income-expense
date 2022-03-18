import { useContext } from "react"
import DataContext from "../data/DataContext"

const ReportComponent=()=>{
    const {income, expense, total} = useContext(DataContext)
    const formatNumber=(num)=>{
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }  
    const design = { color: "black", textAlign: "left", fontSize: "2rem" , fontWeight: "bolder"};
    return (
        <div>
            {/* เขียนได้สองแบบ แบบ useContext กับ Consumer */}
            <div className="report">
                <div>
                    <h4>ยอดเงินคงเหลือ (บาท) </h4>
                    <h1 style={design}>{formatNumber(total)}  ฿</h1>
                </div>
                
                <div className="report-container">
                    <div>
                        <h4>รายได้ทั้งหมด :</h4>
                        <p className="report-income">รายรับ  :{formatNumber(income)}  </p>
                    </div> 
                    <div>
                        <h4>รายจ่ายทั้งหมด :</h4>
                        <p className="report-expense">:{formatNumber(expense)}</p>
                    </div>   
                </div>
            </div>
            
            
            

        </div>
    );
}

export default ReportComponent;
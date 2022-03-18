import React, { useState, useEffect } from "react";
import "./App.css";
import './component/ReportComponent.css'
import Form from "./component/form";
import FormComponent from "./component/FormComponent";
import Items from "./component/items";
import ReportComponent from "./component/ReportComponent";
import Transection from "./component/Transection";
import DataContext from "./data/DataContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const design = { color: "red", textAlign: "center", fontSize: "2rem" , fontWeight: "bolder"};

  const initState = [
    { id: 1, title: "ค่าเช่าบ้าน", amount: -5000 },
    { id: 2, title: "เงินเดือน", amount: 25000 },
    { id: 3, title: "ค่าครีม", amount: -3540 },
    { id: 4, title: "ค่าน้ำมัน", amount: -1500 },
  ];

  const [items, setItems] = useState(initState); // ค่าเริ่มต้น initdata

  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);
  const [reportTotal, setReportTotal] = useState(0);

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
      //เอา newItem ข้อมูลใหม่มาต่อ prevItem ข้อมูลเดิม
    });
    console.log("ข้อมูลที่ส่งมาจากฟอร์ม = ", newItem);
  };

  console.log("ค่าทั้งหมด = ", items);

  //คำนวณเงินทั้งหมด
  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0); // กรองข้อมูล
    const expense =
      amounts
        .filter((element) => element < 0)
        .reduce((total, element) => (total += element), 0) * -1;

    const total = income - expense;

    setReportIncome(income);
    setReportExpense(expense);
    setReportTotal(total);

    console.log("รายได้  : ", income);
    console.log("รายจ่าย : ", expense);
    console.log("คงเหลือ : ", total);
  }, [items, reportIncome, reportExpense, reportTotal]);

 

  return (
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
        total: reportTotal,
      }}
    >
      <div className="container">
        <h1 style={design}>แอพบัญชีรายรับ-รายจ่าย(Test-Font)</h1>

        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/"> ข้อมูลบัญชี </Link> {/* Link อยู่ใน Tag Router */}
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>

            <Routes>
              
              //กำหนดเส้นทาง
              <Route path="/" exact element={<><ReportComponent /><Transection items={items} /></>}> // exact ทำให้เป็นหน้าแรก
              </Route>

              <Route path="/insert" element={<><FormComponent onAddItem={onAddNewItem}/><Transection items={items} /></>}>
              </Route> 
              
            </Routes>
            
            
          </div>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;

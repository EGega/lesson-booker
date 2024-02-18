import { useState } from 'react'
import creditCard from "../../assets/logos/Mastercard-Logo.wine.png"
import aliPay from "../../assets/logos/Alipay-Logo.wine.png"
import paypal from "../../assets/logos/PayPal-Logo.wine.png"
import Navbar from '../../components/navbar/Navbar'
import styled from "./CheckoutPage.module.css"
const CheckoutPage = () => {
  const [paymentType, setPaymentType] = useState(null)
  let currYear = new Date().getFullYear()
  console.log(currYear);
  const years = [currYear]
  while(years.length < 20) {
   currYear += 1 
   years.push(currYear)
  }
  console.log(years);
  return (
 <>
   <Navbar />
   <div className={styled.container}>
    <div className={styled.paymentSelection}>
     <h3>Choose your payment method</h3>
     <div className={styled.images}>
      <img onClick={() => setPaymentType("card")} src={creditCard} alt="" />
      <img src={paypal} alt="" />
      <img src={aliPay} alt="" />
     </div>
    </div>
    {paymentType === "card" && 
     <div className={styled.creditCard}>
      <form action="">
        <div className={styled.number}>
         <label htmlFor="number">Card Number</label>
         <input type="text" name="number" id="number" />
        </div>
        <div className={styled.name}>
         <label htmlFor="name">Cardholder's Name</label>
         <input type="text" name='name' id='name' />
        </div>
         <div className={styled.date}>
          <label htmlFor="">Exp Date</label>
             <select name="" id="months">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
              <option value="">11</option>
              <option value="">12</option>
             </select>
             <select name="" id="years">
               {years.map((year) => {
               return <option value={year}> {year} </option>
               })}
             </select>
         </div>
      </form>
     </div>
    }
   </div>
  </>
  )
}

export default CheckoutPage
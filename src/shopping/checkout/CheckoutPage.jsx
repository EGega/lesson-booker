import { useState } from 'react'
import creditCard from "../../assets/logos/Mastercard-Logo.wine.png"
import aliPay from "../../assets/logos/Alipay-Logo.wine.png"
import paypal from "../../assets/logos/PayPal-Logo.wine.png"
import Navbar from '../../components/navbar/Navbar'
const CheckoutPage = () => {
  return (
   <>
   <Navbar />
   <img src={creditCard} alt="" />
   <img src={paypal} alt="" />
   <img src={aliPay} alt="" />
   </>
  )
}

export default CheckoutPage
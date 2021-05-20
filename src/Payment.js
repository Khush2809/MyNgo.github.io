// import React, { useState } from "react";

// function loadScript(src) {
//   return new Promise((resolve) => {
//     const script = document.createElement("script");
//     script.src = src;
//     script.onLoad = () => {
//       resolve(true);
//     };
//     script.onerror = () => {
//       resolve(false);
//     };
//     document.body.appendChild(script);
//   });
// }

// const DEV = document.domain === "localhost";

// function Payment() {
//   const [name, setName] = useState("The Yuva Unity Foundation");
//   const [email, setEmail] = useState("theyuvaunityfoundation2010@gmail.com");
//   const [num, setNum] = useState("9156881003");

//   async function displayRazorPay() {
//     const res = await loadScript(
//       "https://checkout.razorpay.com/v1/checkout.js"
//     );

//     if (!res) {
//       alert("Razorpay failed to load.Are you online?");
//       return;
//     }

//     const data = await fetch("http://localhost:3001/razorpay", {
//       method: "POST",
//     }).then((t) => t.json());
//     console.log(data);
//     const options = {
//       key: DEV ? "rzp_test_PdGKD48XbuRtN0" : "API_NOT_AVAILABLE",
//       amount: data.amount.toString(),
//       currency: data.currency,
//       name: "THE YUVA UNITY FOUNDATION",
//       description: "Test Transaction",
//       image: "http://localhost:3001/GpayIcon.png",
//       order_id: data.id,
//       handler: function (response) {
//         alert(response.razorpay_payment_id);
//         alert(response.razorpay_order_id);
//         alert(response.razorpay_signature);
//       },
//       prefill: {
//         name,
//         email,
//         num,
//       },
//     };
//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   }

//   return (
//     <div>
//       <button className="Donate" onClick={displayRazorPay}>
//         Donate
//       </button>
//     </div>
//   );
// }

// export default Payment;

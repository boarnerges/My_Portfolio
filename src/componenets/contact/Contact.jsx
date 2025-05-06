import React from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
// import emailjs from 'emailjs-com'
//
// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_8u4ck37', 'service_8u4ck37', form.current, 'DOMsboqCXmUznzf-j')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

// return (
// <section id="contact">
//   <h5>Get In Touch</h5>
//   <h2>Contact Me</h2>

//   <div className="container contact__container">
//     <div className="contact__options">
//       <article className="contact__option">
//         <MdOutlineMailOutline className="contact_option-icon" />
//         <h4>Email</h4>
//         <h5>olujawo1996@gmail.com</h5>
//         <a href="mailto:olujawo1996@gmail.com" target="_blank">
//           Send a message
//         </a>
//       </article>

//       <article className="contact__option">
//         <RiMessengerLine className="contact_option-icon" />
//         <h4>Messenger</h4>
//         <h5>owolabiolusegun</h5>
//         <a href="https://m.me/segunjames.owolabi" target="_blank">
//           Send a message
//         </a>
//       </article>

//       <article className="contact__option">
//         <BsWhatsapp className="contact_option-icon" />
//         <h4>WhatsApp</h4>
//         <h5>+2349070506272</h5>
//         <a
//           href="https:api.whatsapp.com/send?phone = +2349070506272"
//           target="_blank"
//         >
//           Send a message
//         </a>
//       </article>
//     </div>

//     <form ref={form} onSubmit={sendEmail}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Your Full Name"
//         Required
//       />
//       <input type="email" name="email" placeholder="Your Email" Required />
//       <textarea
//         name="message"
//         id=""
//         cols="30"
//         rows="10"
//         placeholder="Your Message"
//       ></textarea>
//       <button type="submit" className="btn btn-primary">
//         Send Message
//       </button>
//     </form>
//   </div>
// </section>
// );
// };

// export default Contact;

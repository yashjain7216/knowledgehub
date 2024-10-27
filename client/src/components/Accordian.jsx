/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import FAQ from './FAQ';
import "./styles.css";

const Accordian = () => {

    const [faqs, setFaqs] = useState([
      {
        question :"What is Yugm.ai’s core mission?",
        answer:" Yugm.ai aims to provide AI-powered knowledge management for companies with a focus on data security, privacy, and operational efficiency."

      },
        {
          question: "How does Yugm secure my data?",
          answer:
            "Yugm offers a fully on-premise solution to give you complete control over your data security.",
          open: false
        },
        {
          question: "How does Yugm.ai handle user management?",
          answer:
            "Yugm.ai offers a basic user management system where admins can add users, assign roles, and ensure that employees have the appropriate access based on their roles within the organization.",
          open: false
        },
        {
          question: "What are the key features of Yugm.ai’s admin knowledge management system?",
          answer: "Yugm.ai offers a simplified user management system where admins can add users, assign roles, and ensure that employees have the appropriate access based on their roles within the organization.",
          open: false
        },
      
      ]);
    
      const toggleFAQ = index => {
        setFaqs(
          faqs.map((faq, i) => {
            if (i === index) {
              faq.open = !faq.open;
            } else {
              faq.open = false;
            }
    
            return faq;
          })
        );
      };
    
      // const toggleFAQ = (index) => {
      //   setFaqs((prevFaqs) =>
      //     prevFaqs.map((faq, i) =>
      //       i === index ? { ...faq, open: !faq.open } : faq
      //     )
      //   );
      // };
  return (
    <div>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  )
}

export default Accordian;


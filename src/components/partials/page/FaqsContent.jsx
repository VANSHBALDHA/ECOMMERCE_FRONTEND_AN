import React, { useState } from "react";
import "./index.css";

const FaqsContent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What Shipping Methods Are Available?",
      answer:
        "Ex Portland Pitchfork irure mustache. Eutra fap before they sold out literally. Aliquip ugh bicycle rights actually mlkshk, seitan squid craft beer tempor.",
    },
    {
      question: "Do You Ship Internationally?",
      answer:
        "Hoodie tote bag mixtape tofu. Typewriter jean shorts wolf quinoa, messenger bag organic freegan cray.",
    },
    {
      question: "How Long Will It Take To Get My Package?",
      answer:
        "Swag slow-carb quinoa VHS typewriter pork belly brunch, paleo single-origin coffee Wes Anderson. Flexitarian Pitchfork forage, literally paleo fap pour-over. Wes Anderson Pinterest YOLO fanny pack meggings, deep v XOXO chambray sustainable slow-carb raw denim church-key fap chillwave Etsy. +1 typewriter kitsch, American Apparel tofu Banksy Vice.",
    },
    {
      question: "What Payment Methods Are Accepted?",
      answer:
        "Fashion axe DIY jean shorts, swag kale chips meh polaroid kogi butcher Wes Anderson chambray next level semiotics gentrify yr. Voluptate photo booth fugiat Vice. Austin sed Williamsburg, ea labore raw denim voluptate cred proident mixtape excepteur mustache. Twee chia photo booth readymade food truck, hoodie roof party swag keytar PBR DIY.",
    },
    {
      question: "Is Buying On-Line Safe?",
      answer:
        "Art party authentic freegan semiotics jean shorts chia cred. Neutra Austin roof party Brooklyn, synth Thundercats swag 8-bit photo booth. Plaid letterpress leggings craft beer meh ethical Pinterest.",
    },
    {
      question: "How do I place an Order?",
      answer:
        "Keytar cray slow-carb, Godard banh mi salvia pour-over. Slow-carb Odd Future seitan normcore. Master cleanse American Apparel gentrify flexitarian beard slow-carb next level. Raw denim polaroid paleo farm-to-table, put a bird on it lo-fi tattooed Wes Anderson Pinterest letterpress. Fingerstache McSweeney’s pour-over, letterpress Schlitz photo booth master cleanse bespoke hashtag chillwave gentrify.",
    },
    {
      question: "How Can I Cancel Or Change My Order?",
      answer:
        "Plaid letterpress leggings craft beer meh ethical Pinterest. Art party authentic freegan semiotics jean shorts chia cred. Neutra Austin roof party Brooklyn, synth Thundercats swag 8-bit photo booth.",
    },
    {
      question: "Do I need an account to place an order?	",
      answer:
        "Thundercats swag 8-bit photo booth. Plaid letterpress leggings craft beer meh ethical Pinterest. Twee chia photo booth readymade food truck, hoodie roof party swag keytar PBR DIY. Cray ugh 3 wolf moon fap, fashion axe irony butcher cornhole typewriter chambray VHS banjo street art.",
    },
    {
      question: "How Do I Track My Order?",
      answer:
        "Kale chips Truffaut Williamsburg, hashtag fixie Pinterest raw denim c hambray drinking vinegar Carles street art Bushwick gastropub. Wolf Tumblr paleo church-key. Plaid food truck Echo Park YOLO bitters hella, direct trade Thundercats leggings quinoa before they sold out. You probably haven’t heard of them wayfarers authentic umami drinking vinegar Pinterest Cosby sweater, fingerstache fap High Life.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="ps-checkout ps-section--shopping">
      <div className="container">
        <div className="ps-section__header">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="ps-section__content"></div>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqsContent;

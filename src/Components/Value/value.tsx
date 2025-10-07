import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineMoveDown } from "react-icons/md";
import "./value.css";
import data from "../../utils/accordion";

interface AccordionData {
  icon: React.ReactNode;
  heading: string;
  detail: string;
}

const Value: React.FC = () => {
  return (
    <section className="v-wapper">
      <div className="flexCenter innerWidth paddings v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        <div className="flexColStart v-right">
          <h3 className="orangeText">Our Value</h3>
          <h1 className="primaryText">Value We Give To You</h1>
          <span className="secondaryText">
            We Always Ready To Help By Providijng the Services For You
            <br />
            We beleive a good blace Live Can Make Your Life Better
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item: AccordionData, i: number) => (
              <AccordionItem className="accordionItem" key={i} uuid={i}>
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordionItemButton gap">
                    <main className="flexCenter icon">{item.icon}</main>
                    <span className="primaryText">{item.heading}</span>
                    <div className="flexCenter">
                      <MdOutlineMoveDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;

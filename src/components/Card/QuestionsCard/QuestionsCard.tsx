import { FC } from "react";
import { AccordionItem } from "../../Accordion/Accordion";
import "./QuestionsCard.css";

export const Questions: FC = () => {
  return (
    <div className="questions">
      <AccordionItem 
        title="What is BINA?" 
        content="BINA is an African Historic NFT Collection.
        This is the first phase to revitalize the stories and cultural Heritage lost in African History over time." 
      />
      <AccordionItem
        title="What is the Aim of BINA?"
        content="To share the true story of the African Heritage with the world and help preseve the African culture"
      />
      <AccordionItem
        title="How Do I mint the BINA NFT?"
        content="On the Bina landing page, Go to the mint section, connect your wallet and click on MINT"
      />
    </div>
  );
};

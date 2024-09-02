import { useState } from "react";
import Image from "next/image"; // Import Next.js Image component
import { LuChevronRight } from "react-icons/lu";

// Type definitions for AccordionItem props
interface AccordionItemProps {
  title: string | React.ReactNode; // Title can be a string or a React node
  imageSrc?: string; // Optional image source
  children?: React.ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
}

// AccordionItem Component
const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  imageSrc,
  children,
  isOpen,
  toggleOpen,
}) => {
  return (
    <div className="rounded-md mb-2">
      <button
        onClick={toggleOpen}
        className={`w-full text-left p-2 ${
          isOpen ? "bg-[#10b9811a]" : "bg-transparent"
        } flex justify-between items-center hover:bg-[#10b9811a] transition-colors duration-300`}
      >
        <div className="flex items-center space-x-2">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt="Icon"
              width={18}
              height={18}
              className="mr-2"
            />
          )}
          <span className={`${isOpen ? "text-teal-800" : "text-gray-700"}`}>
            {title}
          </span>
        </div>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          <LuChevronRight />
        </span>
      </button>
      {isOpen && <div className="ps-4">{children}</div>}
    </div>
  );
};

// Type definitions for Accordion props
interface AccordionProps {
  items: Array<{
    title: string | React.ReactNode;
    imageSrc?: string;
    content?: React.ReactNode;
    children?: Array<{
      title: string | React.ReactNode;
      imageSrc?: string;
      content?: React.ReactNode;
      children?: Array<{
        title: string | React.ReactNode;
        imageSrc?: string;
        content?: React.ReactNode;
      }>;
    }>;
  }>;
}

// Accordion Component
const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          imageSrc={item.imageSrc}
          isOpen={openIndex === index}
          toggleOpen={() => handleToggle(index)}
        >
          {item.children && item.children.length > 0 ? (
            <Accordion items={item.children} />
          ) : (
            item.content
          )}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;

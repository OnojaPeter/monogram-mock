import { useState, useRef } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Accordion = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };
  
  return (
    <div className="mt-16 border-t-2 border-gray-500 m-2">
      <div className="border-b-2 border-gray-500">
        <header
          onClick={() => handleAccordion(1)}
          className="flex items-center justify-between py-5 pr-2 cursor-pointer"
        >
          <h3 className="uppercase">product description</h3>
          <div>{openAccordion === 1 ? <FaMinus /> : <FaPlus />}</div>
        </header>
        <div
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
            openAccordion === 1 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="space-y-5 my-5 ">
            <div className="space-y-5">
              <h4>
                **PRE-ORDER ITEM: <span>Estimated to ship in</span> SEPTEMBER**
              </h4>
              <p>
                Audio Console is the essential tool for simple to diverse DAW
                workflows. Enjoy flexibility and efficiency with universal MIDI
                support to compose, mix and so much more.
              </p>
            </div>
            <div className="space-y-5">
              <h4>PRODUCT DETAILS</h4>
              <div className="ml-7">
                <ul className="flex gap-x-3 items-center list-disc list-inside">
                  <li className="text-xl font-semibold">
                    Universal MIDI (1.0)
                  </li>
                </ul>
                <ul className="flex gap-x-3 ml-7 custom-list-disc  ">
                  <li>
                    1000’s of possibilities with support for most DAWs including
                    Logic Pro, Cubase, Ableton, FL Studio, Reaper and more.
                  </li>
                </ul>
              </div>
              <div className="block">
                <span className="font-semibold">
                  Essential Productivity Apps:
                </span>{" "}
                Zoom, Microsoft Teams, Chrome, Safari, Spotify, Apple Music, and
                more
              </div>
              <div>
                <h4>INCLUDES:</h4>
                <ul>
                  <li>1 Core module</li>
                  <li>1 Dial module</li>
                  <li>1 Slider module</li>
                  <li>1 Essential Keys module</li>
                  <li>Monogram Creator app</li>
                  <li>
                    Audio Console Pack and 3 month trial of Photo and Video
                    Packs
                  </li>
                  <li>1 USB Type-C to A braided cable (1m)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-gray-500">
        <header
          onClick={() => handleAccordion(2)}
          className="flex items-center justify-between py-5 pr-2 cursor-pointer"
        >
          <h3 className="uppercase">our better editing experience</h3>
          <div>{openAccordion === 2 ? <FaMinus /> : <FaPlus />}</div>
        </header>
        <div
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
            openAccordion === 2 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <p className="mb-5">
            We stand by our products and our promises and we understand that
            everyone’s workflow is different, and even the most adaptable tool
            ever may not always fit. If Monogram Creative Console does not
            improve your editing experience, you can return it for a full refund
            of the original purchase price within 100 days. Contact us at
            support@monogramcc.com if you have any concerns.
          </p>
        </div>
      </div>
      <div className="border-b-2 border-gray-500">
        <header
          onClick={() => handleAccordion(3)}
          className="flex items-center justify-between py-5 pr-2 cursor-pointer"
        >
          <h3 className="uppercase">build quality and materials</h3>
          <div>{openAccordion === 3 ? <FaMinus /> : <FaPlus />}</div>
        </header>
        <div
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
            openAccordion === 3 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="space-y-5">
            <p>
              We take great pride and care in building our products to ensure
              the best quality and user experience. That is why each Monogram
              module features:
            </p>
            <div>
              <ul className="space-y-1 pb-5 list-disc list-inside">
                <li>Precision CNC-machined from solid aerospace aluminium</li>
                <li>
                  Aluminum sandblasted surface for a premium textured finish
                </li>
                <li>
                  Anodized aluminum coating for durability and scratch
                  resistance
                </li>
                <li>
                  Strong neodymium magnetic connectors allow for quick and
                  secure attachment
                </li>
                <li>Micro spring-loaded electrical contacts</li>
                <li>Soft-touch ABS plastic underside</li>
                <li>
                  Grip ring on underside prevents unwanted slipping on table
                  tops
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-gray-500">
        <header
          onClick={() => handleAccordion(4)}
          className="flex items-center justify-between py-5 pr-2 cursor-pointer"
        >
          <h3 className="uppercase">shipping and sales tax</h3>
          <div>{openAccordion === 4 ? <FaMinus /> : <FaPlus />}</div>
        </header>
        <div
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
            openAccordion === 4 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="space-y-4 pb-5">
            <p className="text-[0.9rem]">
              Orders are estimated to be delivered in 2-4 weeks (In Stock Items
              Only). All orders are shipped via leading couriers and include
              tracking.
            </p>
            <p>
              Note: International shipments do not include sales tax. For more
              questions about ordering, see our{" "}
              <span className="text-[#ff7952]">Shipping & Sales FAQ</span> or
              contact us at support@monogramcc.com
            </p>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-gray-500">
        <header
          onClick={() => handleAccordion(5)}
          className="flex items-center justify-between py-5 pr-2 cursor-pointer"
        >
          <h3 className="uppercase">warranty and support</h3>
          <div>{openAccordion === 5 ? <FaMinus /> : <FaPlus />}</div>
        </header>
        <div
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
            openAccordion === 5 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="space-y-4 pb-5">
            <p>
              Included with your Monogram hardware is a limited one (1) year
              manufacturer's warranty from the date of purchase.
            </p>
            <p>
              We also offer Monogram Care, which provides you with 36 months of
              additional coverage including accidental.{" "}
              <span className="text-[#ff7952]">Learn more here.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

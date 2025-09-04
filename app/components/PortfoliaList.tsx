import React from "react";
interface PortfoliaListProps {
  portfolia_onoff?: boolean;
  portfolia_list?: PortList[];
}
interface PortList {
  image?: string;
  title?: string;
}
export default function PortfoliaList({
  portfolia_onoff,
  portfolia_list,
}: PortfoliaListProps) {
  return (
    <>
      {portfolia_onoff && (
        <section className="portfolio-list-scn">
          <div className="container">
            <div className="portfolio-list">
              {portfolia_list?.map((item, index) => (
                <div key={index} className="port-f-item">
                  <div className="port-f-img">
                    <img
                      src={item?.image}
                      width="600"
                      height="500"
                      alt={item?.title}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

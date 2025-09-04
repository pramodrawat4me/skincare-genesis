"use client";
import React from "react";
interface TeamSectionProps {
  team_onoff?: boolean;
  team_title?: string;
  team_list?: TeamList[];
}
interface TeamList {
  designation?: string;
  image?: string;
  name?: string;
}
export default function TeamSection({
  team_onoff,
  team_title,
  team_list,
}: TeamSectionProps) {
  return (
    <>
      {team_onoff && (
        <section className="experts-scn">
          <div className="container">
            <div className="experts-inner text-center">
              <h2 dangerouslySetInnerHTML={{ __html: team_title || "" }} />
            </div>
            <div className="experts-list text-center">
              {team_list?.map((item, index) => (
                <div className="experts-item" key={index}>
                  <div className="experts-item-inner">
                    <div className="experts-img">
                      <img
                        src={item?.image}
                        width="321"
                        height="441"
                        alt="The magic from our skilled experts"
                      />
                    </div>
                    <div className="experts-name">{item?.name}</div>
                    <div className="experts-des">{item?.designation}</div>
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

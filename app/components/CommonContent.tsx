import React from "react";
interface CommonContentProps {
  cc_onoff?: boolean;
  page_class?: string;
  cc_content?: string;
}
export default function CommonContent({
  cc_onoff,
  page_class,
  cc_content,
}: CommonContentProps) {
  if (!cc_onoff) return null;
  return (
    <>
      {page_class ? (
        <section className="skin-care-info">
          <div className="container">
            <div dangerouslySetInnerHTML={{ __html: cc_content || "" }} />
          </div>
        </section>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: cc_content || "" }} />
      )}
    </>
  );
}

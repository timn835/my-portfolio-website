import { frontEndSections } from "./frontendData";

function FrontEndPage() {
  return (
    <div className="frontend">
      {frontEndSections.map((section, secIdx) => (
        <section key={secIdx} className="pb-10 text-center" id={section?.hash}>
          {section.subsections.map((subsection, subsecIdx) => (
            <div
              key={`${secIdx}.${subsecIdx}`}
              className={`flex${
                subsection.imageLeft ? " flex-row-reverse" : ""
              } items-center justify-center`}
            >
              <>
                <div className="flex w-[60vw] flex-col items-center">
                  <h1 className="py-4 text-4xl">{subsection.title}</h1>
                  {subsection.type === "paragraphs" &&
                    subsection.content.map((paragraph) => (
                      <p
                        key={paragraph.hash}
                        className={`pb-3 text-${
                          subsection.imageLeft ? "right" : "left"
                        }`}
                        id={paragraph.hash}
                      >
                        {paragraph.textContent.map((chunk, chunkIdx) => {
                          if (chunk.type === "bold")
                            return <b key={chunkIdx}>{chunk.text}</b>;
                          return chunk.text;
                        })}
                      </p>
                    ))}
                  {subsection.type === "list" && (
                    <ul className={`pb-3 text-left`}>
                      {subsection.content.map((listPoint) => (
                        <li
                          key={listPoint.parent}
                          className="mb-3"
                          id={listPoint.hash}
                        >
                          <b className="text-2xl">{listPoint.parent}</b>
                          <ul className="list-disc">
                            {listPoint.children.map((child, childIdx) => (
                              <li key={childIdx} className="break-words">
                                {child}
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="m-5">
                  <img
                    src={subsection.imageSrc}
                    alt={subsection.title}
                    className="w-[300px]"
                  />
                </div>
              </>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

export default FrontEndPage;

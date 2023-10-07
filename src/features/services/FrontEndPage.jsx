import LoremIpsum from "../../ui/LoremIpsum";

function FrontEndPage() {
  return (
    <div className="frontend">
      <h1>On the front...</h1>
      <section id="react">
        <h2>Why use React?</h2>
        <LoremIpsum numOfParagraphs={5} />
      </section>
      <section id="vanilla">
        <h2>Do people still code with vanilla?</h2>
        <LoremIpsum numOfParagraphs={5} />
      </section>
      <section id="bootstrap">
        <h2>I don&apos;t like writing styles...</h2>
        <LoremIpsum numOfParagraphs={5} />
      </section>
      <section id="cssframeworks">
        <h2>Different flavors of CSS</h2>
        <LoremIpsum numOfParagraphs={5} />
      </section>
    </div>
  );
}

export default FrontEndPage;

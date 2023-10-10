import LoremIpsum from "../../ui/LoremIpsum";

function FrontEndPage() {
  return (
    <div className="frontend">
      <section className="text-center" id="start">
        <div className="flex items-center justify-center">
          <div className="w-[60vw]">
            <h1 className="py-4 text-4xl">
              The hardest question in programming
            </h1>
            <p className="pb-3 text-left">
              <b>Is this too much voodoo for our purposes?</b> According to
              Terry Davis, this is the hardest question a programmer can face.
              This has never been more true for front end developers, especially
              with the number of complex tools that are now at our disposal.
            </p>
            <p className="pb-3 text-left">
              A prime example of this is Redux, which has often become
              synonymous with React apps accross the industry. It is often
              incorporated into the application without careful consideration of
              the project requirements. The reality is, Redux is a state
              management tool that is best suited for when your application has
              a highly complex global UI state, with many spread-out components
              needing the same pieces of state. As far as more simple web apps
              go, it is definitely overkill.
            </p>
          </div>
          <div className="m-5">
            <img
              src="/images/question_image.png"
              alt="question_image"
              className="w-[300px]"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="m-5">
            <img
              src="/images/solution_image.png"
              alt="question_image"
              className="w-[250px]"
            />
          </div>
          <div className="w-[60vw]">
            <h1 className="py-4 text-4xl">The solution</h1>
            <p className="pb-3 text-right">
              Forget that you are a developer for a quick second. Simply ask
              yourself: what is it that I am building? What am I trying to
              achieve? What are the tools available that provide the quickest
              path to my goal? Put your pride to the side. Just because you know
              redux doesn't mean the Context API isn't sufficient. Just because
              you can incorporate microservices doesn't mean a monolith won't
              suffice.
            </p>
            <p className="pb-3 text-right">
              When asking such questions, you have to consider factors such as{" "}
              <b>delivery</b> (what is our timeframe?), <b>maintainability</b>{" "}
              (are we foreseeing a lot of techical debt?), <b>re-usability</b>{" "}
              (is my code going to be used by other team members?),{" "}
              <b>scalability</b> (how many users/visitors are we foreseeing?)
              and many others. Analyzing these factors is key to choose the
              right tech stack for your project.
            </p>
          </div>
        </div>
      </section>

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

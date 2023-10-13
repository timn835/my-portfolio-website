import LoremIpsum from "../../ui/LoremIpsum";

function FrontEndPage() {
  return (
    <div className="frontend">
      <section className="min-h-[90vh] pb-10 text-center">
        <div className="flex items-center justify-center">
          <div className="w-[60vw]">
            <h1 className="py-4 text-4xl">
              Solve the hardest question in programming
            </h1>
            <p className="pb-3 text-left">
              <b>Is this too much voodoo for our purposes?</b> According to
              Terry Davis, this is the hardest question a programmer can face.
              This has never been more true for front end developers, especially
              with the number of complex tools that are now at our disposal.
            </p>
            <p className="pb-3 text-left">
              A prime example of this is Redux, a popular state management
              library which has often become synonymous with React apps accross
              the industry. By analyzing the needs of an application, in
              particular, the complexity of the global UI state, we can make the
              right decision whether Redux is required or not.
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
              Forget that you are a developer. The key is to ask yourself: what
              are you building? What are the tools available for the job? Just
              because you know redux doesn't mean the Context API isn't
              sufficient. Just because you can incorporate microservices doesn't
              mean a monolith won't suffice.
            </p>
            <p className="pb-3 text-right">
              Make the right decision by considering factors such as{" "}
              <b>delivery</b> (what is our timeframe?), <b>maintainability</b>{" "}
              (are we foreseeing a lot of techical debt?), <b>re-usability</b>{" "}
              (is my code going to be used by other team members?),{" "}
              <b>scalability</b> (how many users/visitors are we foreseeing?)
              and many others. By analyzing these factors, we will choose the
              right tech stack for your project.
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-[90vh] pb-10 text-center" id="react">
        <div className="flex items-center justify-center">
          <div className="w-[60vw]">
            <h1 className="py-4 text-4xl">Why React?</h1>
            <ul className="pb-3 text-left">
              <li className="mb-3">
                <b>Component-based</b>
                <ul className="list-disc">
                  <li>Break an app UI into building blocks</li>
                  <li>
                    Naturally break down a complex problem into manageable
                    sub-problems
                  </li>
                  <li>
                    Build complex UI by combining components into a tree-like
                    structure
                  </li>
                  <li>Analyze component tree for rendering optimization</li>
                </ul>
              </li>
              <li className="mb-3">
                <b>Declarative</b>
                <ul className="list-disc">
                  <li>
                    Use JSX to tell react how your component should look like
                    based on the current data or state
                  </li>
                  <li>
                    Let React do all of the heavy lifting and DOM manipulations
                  </li>
                  <li>
                    No more spaghetti code in complex applications (unavoidable
                    with vanilla JS)
                  </li>
                </ul>
              </li>
              <li className="mb-3">
                <b>State-driven</b>
                <ul className="list-disc">
                  <li>React to state changes by re-rendering the UI</li>
                  <li>
                    State: can be global or local, UI or remote (server-side)
                  </li>
                  <li>Excellent tool for keeping UI and data in sync</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="m-5">
            <img
              src="/images/react_image.png"
              alt="question_image"
              className="w-[400px]"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="m-5">
            <img
              src="/images/superman_image.png"
              alt="question_image"
              className="w-[300px]"
            />
          </div>
          <div className="w-[60vw]">
            <h1 className="py-4 text-4xl">What makes us a super-react dev</h1>
            <p className="break-words pb-3 text-right">
              vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-[90vh] pb-10 text-center" id="vanilla">
        <div className="flex items-center justify-center">
          <div className="w-[60vw]">
            <h1 className="py-4 text-4xl">Is vanilla tech still relevant?</h1>
            <p className="pb-3 text-left">
              <b>Absolutely.</b> In my experience in the industry, every
              top-tier front end developer is fairly skilled with HTML, CSS and
              JS. In order to understand more complex libraries and frameworks
              (React, NextJS, Tailwind), it is imperative to have a mastery of
              the things these frameworks are built upon.
            </p>
            <p className="pb-3 text-left">
              Furthermore, a vanilla tech stack is often the right choice for
              simpler short-term endeavors. Having fewer dependencies will make
              things lighter, easier, faster. By knowing how to code with
              vanilla, our clients have a much wider range of possibilities for
              their projects.
            </p>
          </div>
          <div className="m-5">
            <img
              src="/images/vanilla_image.png"
              alt="question_image"
              className="mr-10 w-[300px]"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="m-5">
            <img
              src="/images/limitless_image.png"
              alt="question_image"
              className="mr-10 w-[200px]"
            />
          </div>
          <div className="w-[60vw]">
            <h1 className="py-4 text-4xl">React integration</h1>
            <p className="pb-3 text-right">
              Oftentimes, you will find fantastic vanilla JS code online that
              you would love to have in your project. Examples of this are map
              components (GoogleMaps, OpenStreetMap), pagination/infinite
              scrolling, tabulation, etc.
            </p>
            <p className="pb-3 text-right">
              Having an intricate knowledge React allows us to integrate
              incredible vanilla source code into your React application. The
              possibilities are limitless!
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-[90vh] pb-10 text-center" id="front-frameworks">
        <div className="flex items-center justify-center">
          <div className="w-[60vw]">
            <h1 className="py-4 text-4xl">Use pre-existing styling</h1>
            <p className="pb-3 text-left">
              Sometimes, we do not have the time to style our webpage from
              scratch. Project delivery always has top priority. So, if spending
              many hours building standard front end components (buttons,
              modals, sliders, text fields, etc.) is not an option, how do we
              still make our webpage look good?
            </p>
            <p className="pb-3 text-left">
              To solve this problem, we offer a mastery of frameworks such as
              <b> Bootstrap CSS</b> and <b>React Material UI</b>. These
              technologies offer a wide variety of customizable webpage elements
              that will suit the needs of most modern sites. In no time at all,
              your project will be 🔥!
            </p>
          </div>
          <div className="m-5">
            <img
              src="/images/time_image.png"
              alt="question_image"
              className="w-[200px]"
            />
          </div>
        </div>
      </section>
      <section className="pb-10 text-center" id="styles-of-css">
        <h2></h2>
        <LoremIpsum numOfParagraphs={5} />
      </section>
    </div>
  );
}

export default FrontEndPage;

const frontEndSections = [
  {
    subsections: [
      {
        title: `Solve the hardest question in programming`,
        type: "paragraphs",
        content: [
          {
            textContent: [
              {
                type: "bold",
                text: `Is this too much voodoo for our purposes? `,
              },
              {
                text: `According to Terry Davis, this is the hardest question a programmer can face. This has never been more true for front end developers, especially with the number of complex tools that are now at our disposal.`,
              },
            ],
            hash: "hardest-question",
          },
          {
            textContent: [
              {
                text: `A prime example of this is Redux, a popular state management library which has often become synonymous with React apps accross the industry. By analyzing the needs of an application, in particular, the complexity of the global UI state, we can make the right decision whether Redux is required or not.`,
              },
            ],
            hash: "prime-example",
          },
        ],
        imageSrc: "/images/question_image.png",
        imageLeft: true,
        imageSize: 300,
      },
      {
        title: `The solution`,
        type: "paragraphs",
        content: [
          {
            textContent: [
              {
                text: `Forget that you are a developer. The key is to ask yourself: what are you building? What are the tools available for the job? Just because you know redux doesn't mean the Context API isn't sufficient. Just because you can incorporate microservices doesn't mean a monolith won't suffice.`,
              },
            ],
            hash: "forget-dev",
          },
          {
            textContent: [
              {
                text: `Make the right decision by considering factors such as `,
              },
              {
                type: "bold",
                text: `delivery `,
              },
              {
                text: `(what is our timeframe?), `,
              },
              {
                type: "bold",
                text: `maintainability `,
              },
              {
                text: `(are we foreseeing a lot of techical debt?), `,
              },
              {
                type: "bold",
                text: `re-usability `,
              },
              {
                text: `(is my code going to be used by other team members?), `,
              },
              {
                type: "bold",
                text: `scalability `,
              },
              {
                text: `(how many users/visitors are we foreseeing?) and many others. By analyzing these factors, we will choose the right tech stack for your project.`,
              },
            ],
            hash: "make-right-decision",
          },
        ],
        imageSrc: "/images/solution_image.png",
        imageSize: 250,
      },
    ],
  },
  {
    hash: "react",
    subsections: [
      {
        title: `Why React?`,
        type: "list",
        content: [
          {
            parent: `Component-based`,
            children: [
              `Break an app UI into building blocks`,
              `Naturally break down a complex problem into manageable sub-problems`,
              `Build complex UI by combining components into a tree-like structure`,
              `Analyze component tree for rendering optimization`,
            ],
            hash: "component-based",
          },
          {
            parent: `Declarative`,
            children: [
              `Use JSX to tell react how your component should look like based on the current data or state`,
              `Let React do all of the heavy lifting and DOM manipulations`,
              `No more spaghetti code in complex applications (unavoidable with vanilla JS)`,
            ],
            hash: "declarative",
          },
          {
            parent: `State-driven`,
            children: [
              `React to state changes by re-rendering the UI`,
              `State: can be global or local, UI or remote (server-side)`,
              `Excellent tool for keeping UI and data in sync`,
            ],
            hash: "state-driven",
          },
        ],
        imageSrc: "/images/react_image.png",
        imageLeft: true,
        imageSize: 400,
      },
      {
        title: `What makes us a super-react dev`,
        type: "list",
        content: [
          {
            parent: `First reason`,
            children: [`bla`, `blabla`, `blablablaa`],
            hash: "first-super-reason",
          },
          {
            parent: `Second reason`,
            children: [`bla`, `blabla`, `blablabla`],
            hash: "second-super-reason",
          },
          {
            parent: `Third reason`,
            children: [`bla`, `blabla`, `blablabla`],
            hash: "third-super-reason",
          },
        ],
        imageSrc: "/images/superman_image.png",
        imageSize: 300,
      },
    ],
  },
  {
    hash: "vanilla",
    subsections: [
      {
        title: `Is vanilla tech still relevant?`,
        type: "paragraphs",
        content: [
          {
            textContent: [
              { type: "bold", text: `Absolutely. ` },
              {
                text: `In my experience in the industry, every top-tier front end developer is fairly skilled with HTML, CSS and JS. In order to understand more complex libraries and frameworks (React, NextJS, Tailwind), it is imperative to have a mastery of the things these frameworks are built upon.`,
              },
            ],
            hash: "vanilla-worth-it",
          },
          {
            textContent: [
              {
                text: `Furthermore, a vanilla tech stack is often the right choice for simpler short-term endeavors. Having fewer dependencies will make things lighter, easier, faster. By knowing how to code with vanilla, our clients have a much wider range of possibilities for their projects.`,
              },
            ],
            hash: "right-for-simpler",
          },
        ],
        imageSrc: "/images/vanilla_image.png",
        imageLeft: true,
        imageSize: 300,
      },
      {
        title: `React integration`,
        type: "paragraphs",
        content: [
          {
            textContent: [
              {
                text: `Oftentimes, you will find fantastic vanilla JS code online that you would love to have in your project. Examples of this are map components (GoogleMaps, OpenStreetMap), pagination/infinite scrolling, tabulation, etc.`,
              },
            ],
            hash: "integration-examples",
          },
          {
            textContent: [
              {
                text: `Having an intricate knowledge React allows us to integrate incredible vanilla source code into your React application. The possibilities are limitless!`,
              },
            ],
            hash: "limitless-possibilities",
          },
        ],
        imageSrc: "/images/limitless_image.png",
        imageSize: 200,
      },
    ],
  },
  {
    hash: "front-frameworks",
    subsections: [
      {
        title: `Use pre-existing styling`,
        type: "paragraphs",
        content: [
          {
            textContent: [
              {
                text: `Sometimes, we do not have the time to style our webpage from scratch. Project delivery always has top priority. So, if spending many hours building standard front end components (buttons, modals, sliders, text fields, etc.) is not an option, how do we still make our webpage look good?`,
              },
            ],
            hash: "time-running-out",
          },
          {
            textContent: [
              {
                text: `To solve this problem, we offer a mastery of frameworks such as `,
              },
              {
                type: "bold",
                text: `Bootstrap CSS `,
              },
              {
                text: `and `,
              },
              {
                type: "bold",
                text: `React Material UI`,
              },
              {
                text: `. These technologies offer a wide variety of customizable webpage elements that will suit the needs of most modern sites. In no time at all, your project will be 🔥!`,
              },
            ],
            hash: "make-look-good-fast",
          },
        ],
        imageSrc: "/images/time_image.png",
        imageLeft: true,
        imageSize: 200,
      },
    ],
  },
  {
    hash: "styles-of-css",
    subsections: [
      {
        title: `Different ways of writing CSS`,
        type: "paragraphs",
        content: [
          {
            textContent: [
              {
                text: `Tailwind is great blablablabla`,
              },
            ],
            hash: "tailwind-is-great",
          },
          {
            textContent: [
              {
                text: `Styled-components are great blablablabla`,
              },
            ],
            hash: "styled-components-are-great",
          },
        ],
        imageSrc: "/images/question_image.png",
        imageSize: 300,
      },
    ],
  },
];
export { frontEndSections };

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
                text: `reusability `,
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
      },
      {
        title: `What makes a super-react dev`,
        type: "list",
        content: [
          {
            parent: `Having a React mindset`,
            children: [
              `Think in terms of overall app data flow`,
              `Build complex UI into smaller re-usable components`,
              `Distinguish between local and global state`,
              `Know where to place pieces of state (component, url, context)`,
            ],
            hash: "react-mindset",
          },
          {
            parent: `Knowing advanced React patterns`,
            children: [
              `Component composition & custom hooks: improve reusability and reduce prop drilling`,
              `Context API + useReducer hook: fix prop-drilling, decouple state updating logic from components`,
              `Compound components: create more complex, reusable and flexible components (e.g. modals, menus)`,
            ],
            hash: "advanced-react-patterns",
          },
          {
            parent: `Using performance optimization techniques`,
            children: [
              `Prevent wasted renders: Profiler Developer Tool, memo, useMemo, useCallback`,
              `Improve speed and responsiveness: useMemo, useCallback & useTransition`,
              `Reduce bundle size: less 3rd party packages, code splitting & lazy loading`,
            ],
            hash: "performance-optimization",
          },
          {
            parent: `Knowing React under the hood`,
            children: [
              `Differentiate between component, component instance and React element`,
              `Know what rendering in React means (it is not writing to the DOM!)`,
              `Component reconciliation: diffing process, virtual DOM & the fiber tree`,
              `Understand why key prop improves diffing algorithm`,
              `Be aware of the commit phase (ReactDOM renderer)`,
              `Batching of state updates in event handler (asynchronous state variables)`,
              `Synthetic events + event bubbling`,
            ],
            hash: "inner-workings-of-react",
          },
        ],
        imageSrc: "/images/superman_image.png",
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
                text: `In my experience in the industry, every top-tier front end developer is skilled with HTML, CSS and JS. In order to understand more complex libraries and frameworks (React, NextJS, Tailwind), it is imperative to have a mastery of the things these frameworks are built upon.`,
              },
            ],
            hash: "vanilla-worth-it",
          },
          {
            textContent: [
              {
                text: `If make a comparison with React, the main difference is the `,
              },
              {
                type: "bold",
                text: `separation of concerns`,
              },
              {
                text: `. Vanilla projects are split to create 3 "horizontal" layers, i.e. HTML (structure), CSS (looks) and JS (functionality). React projects are split into "vertical" layers (components), where each layer has a piece of structure, look and functionality (JSX=HTML+CSS+JS).`,
              },
            ],
            hash: "separation-of-concerns",
          },
          {
            textContent: [
              {
                text: `Therefore, a vanilla tech stack is often the right choice for simpler short-term endeavors. Having fewer dependencies will make things lighter, easier, faster. By knowing how to code with vanilla, clients have a much wider range of possibilities for their projects.`,
              },
            ],
            hash: "right-for-simpler",
          },
        ],
        imageSrc: "/images/vanilla_image.png",
        imageLeft: true,
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
      },
      {
        title: `Other benefits of front end development frameworks`,
        type: "list",
        content: [
          {
            parent: `Responsive design`,
            children: [
              `Easily create layouts`,
              `Automatically adapt to different screen sizes`,
              `Ensure a consistent user experience across various devices`,
            ],
            hash: "responsive-design",
          },
          {
            parent: `Customizable themes`,
            children: [
              `Many existing themes and templates out of the box`,
              `Developers can quickly prototype and build interfaces`,
              `Less time spent on design`,
            ],
            hash: "customizable-themes",
          },
          {
            parent: `Large existing community`,
            children: [
              `Documentation available for common issues`,
              `Access to a wide range of 3rd party plugins and extensions`,
              `Strong community support for known problems`,
            ],
            hash: "community-support",
          },
        ],
        imageSrc: "/images/running_image.png",
        imageLeft: false,
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
      },
    ],
  },
];
export { frontEndSections };

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
      },
      {
        title: `What makes a super-react dev`,
        type: "list",
        content: [
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
      },
    ],
  },
  {
    hash: "styles-of-css",
    subsections: [
      {
        title: `An unopinionated approach`,
        type: "paragraphs",
        content: [
          {
            textContent: [
              {
                text: `We believe that developers should be free to choose how to develop their applications. Therefore, the best libraries and frameworks, such as React, offer a wide variety of approaches to styling. These approaches include, but are not limited to : `,
              },
              {
                type: "bold",
                text: `inline styling, external CSS, SASS files, CSS modules, styled-components, tailwind`,
              },
              {
                text: `. The following is a short list describing these approaches, when to use them and what are the pros and cons of each.`,
              },
            ],
            hash: "unopinionated-approach",
          },
        ],
        imageSrc: "/images/unopinionated_image.png",
      },
      {
        title: `Choosing the right tool for the job`,
        type: "list",
        content: [
          {
            parent: `Inline styling`,
            children: [
              `Applying styles directly to JSX elements`,
              `Suitable for small-scale applications or for applying dynamic styles based on state or props`,
              `Pros: simplifies integration with React components, allows dynamic styling based on component state or props`,
              `Cons: can lead to cluttered code, limited reusability, and difficulty in maintaining complex styles`,
            ],
            hash: "inline-styling",
          },
          {
            parent: `External CSS`,
            children: [
              `Creating separate CSS files linked to JSX components`,
              `Ideal for a traditional approach and when requiring a clear separation of concerns between HTML, CSS, and JS`,
              `Pros: Promotes a modular structure, eases management and reuse of styles across components, leverages browser caching`,
              `Cons: Potential for global style conflicts and specificity issues if not managed properly`,
            ],
            hash: "external-css",
          },
          {
            parent: `SASS files`,
            children: [
              `Using SASS to extend CSS with features like variables, nesting, and mixins`,
              `Suitable for creating cleaner and more structured styles, reducing redundancy, and improving code readability`,
              `Pros: Enables the creation of complex styles with less code, enhances maintainability and organization of stylesheets`,
              `Cons: Requires a learning curve for developers not familiar with SASS, may add complexity to the development environment`,
            ],
            hash: "sass-files",
          },
          {
            parent: `CSS modules`,
            children: [
              `Allowing local scoping of CSS by creating unique class names for each component`,
              `Ideal for maintaining modular, reusable, and maintainable styles scoped to specific components`,
              `Pros: Promotes a component-based approach to styling, prevents style conflicts, enables easy management and refactoring`,
              `Cons: Might necessitate additional build configurations, may slightly increase development complexity for beginners`,
            ],
            hash: "css-modules",
          },
          {
            parent: `Styled components`,
            children: [
              `Writing CSS directly within JavaScript code using the styled-components library`,
              `Suitable for creating dynamic and themeable UI components, and for enabling easy management and maintenance of complex UI elements`,
              `Pros: Simplifies styling integration with components, supports props and dynamic styles, enhances component encapsulation`,
              `Cons: Might lead to large JavaScript bundles, requires a mental shift for developers accustomed to traditional CSS`,
            ],
            hash: "styled-components",
          },
          {
            parent: `Tailwind`,
            children: [
              `Using a utility-first CSS framework for applying styles directly through pre-defined utility classes`,
              `Ideal for rapidly prototyping and efficiently styling complex layouts and designs`,
              `Pros: Simplifies the creation of complex designs, offers a comprehensive set of utility classes for common CSS properties, promotes consistent styling`,
              `Cons: May result in larger file sizes due to the use of utility classes, may lead to potential styling inconsistencies without careful management`,
            ],
            hash: "tailwind",
          },
        ],
        imageSrc: "/images/toolset_image.png",
      },
    ],
  },
];
export { frontEndSections };

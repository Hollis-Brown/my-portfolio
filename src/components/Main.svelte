<script>
  import Step from "./Step.svelte";
  import Certifications from './Certifications.svelte';

  let steps = [
    {
      name: "Dashboard App",
      icon: "fa fa-solid fa-line-chart",
      description:
        "The React Admin Dashboard is created with React.js, JSX & CSS! In this sleek project, I focused on crafting a responsive admin template. Using a grid system for layout, I designed and styled various components like charts, lists, and containers using CSS.",
    },
    {
      name: "Weather App",
      icon: "fa-solid fa-thermometer-half",
      description:
        "The Weather App is created with React.js, JSX & CSS! I utilized OpenWeatherMap and GeoDB APIs, showcasing interactive weather forecasts, search feature to fetch data, and city autocomplete features. I also got practice using the react-accordion and react-select-async-paginate UI packages.",
    },
    {
      name: "AI-designed Portfolio App",
      icon: "fa-solid fa-robot",
      description:
        "The AI-designed Portfolio App is a React & Tailwind CSS web application, hosted on, that uses Midjourney AI to generate a design for a web portfolio, that is responsive and will make UI/UX designers stare in awe at its sleek user interface.",
    },
    {
      name: "Web Scraper Server",
      icon: "fa-solid fa-spider",
      description:
        "The Web Scraper Server is created with Node.js & Express.js! In this backend project I learned to create API endpoints where I employ a web-scraper to fetch the financial profile and price history for any stock, process the information, and return it back to the requester. I enjoyed learning data fetching and secure API key-storing best practices.",
    },
    {
      name: "CRON Job Server",
      icon: "fa-solid fa-clock",
      description:
        "The CRON Job Server is created with Cherrio, HTML, Node.js & Axios! In this project I learned to fetch HTML from Reddit.com pages and parse through the data to retrieve/scrape subreddit activity data from a webpage, schedule the scraping at regular intervals, and saving the data to a database. Lastly, I served up the data as a RESTful API.",
    },
    {
      name: "Serverless Computing Project",
      icon: "fa-solid fa-code",
      description:
        "The Google Cloud Functions Project is hosted on Google Cloud Platform, leveraging Serverless computing. It demonstrates the use of cloud functions as an alternative to traditional server setups, highlighting their configuration and setup process compared to custom servers.",
    },
    {
      name: "E-commerce Store App",
      icon: "fa-solid fa-code",
      description:
        "The Next.js E-commerce Project is built with Next.js, TailwindCss, Google Fonts, and Font Awesome icons. It features a complete e-commerce setup with a Stripe checkout system, advanced store layout using Context API for state management, and optimized component configurations for enhanced functionality.",
    },
    {
      name: "Social Media App",
      icon: "fa-solid fa-users",
      description:
        "The Social Media App is created with Next.js, React.js, Tailwind CSS, Node.js, Express.js & MySql! It is a dynamic platform built to connect users through interactive posts, comments, and profiles. It features responsive design, user authentication, real-time updates, and intuitive UI/UX for seamless navigation and engagement.",
    },
    {
      name: "Chat App",
      icon: "fa-solid fa-comment-dots",
      description:
        "The Chat App is a React.js & Material UI web application, hosted on Firebase, that handles state management with Zustand! It features real-time chat functionality with emoji support, user authentication, and image uploads. The app implements responsive design, message filtering, user blocking, and dynamic user chat retrieval, enhancing user interaction and experience.",
    },
    {
      name: "Web Polling App",
      icon: "fa-solid fa-poll",
      description:
        "The Polling Web App is a JavaScript, HTML & CSS web application, hosted on Firebase, that has a Node.js server! It generates static webpages with client-side and server-side rendering, persists data from a CRUD API using Firestore from Firebase, and features a sleek UI!",
    },
  ];

  let benefits = [
    {
      metric: "10x",
      name: "A bootcamp graduate & self-taught developer",
      description:
        "I graduated Bay Valley Tech Code Academy in June 2024. In addition to my bootcamp studies, I am a self-taught developer who has used free online resources to expand my knowledge and skills. I have a passion for the creative and problem-solving aspects of developing web application. I started with JavaScript, HTML & CSS and have since advanced to JavaScript frameworks. I am also actively expanding my knowledge in backend programming, design, and cloud services.",
    },
    {
      name: "A detailed-oriented approach",
      description:
        "As a junior developer, I prioritize attention to detail in my work. When it comes to coding I ensure clean and well-structured code that adheres to best practices. This focus on detail enables me to deliver high-quality solutions and contribute to the overall success of projects.",
    },
    {
      name: "A good communicator",
      description:
        "I prioritize the value of communication and believe in fostering transparent and constructive interactions. By cultivating open lines of communication, I build strong relationships and contribute to the effectiveness and productivity of any team and work environment.",
    },
  ];

  let certifications = [
    {
      src: "/assets/Hollis Brown-Student-ID-23166-Introduction to HTML Module.jpg",
      alt: "Certification 1",
    },
    {
      src: "/assets/Hollis Brown-Student-ID-23166-Introduction to Responsive CSS Module.jpg",
      alt: "Certification 2",
    },
    {
      src: "/assets/Hollis Brown-Student-ID-23166-Basic Content Management Systems Module.jpg",
      alt: "Certification 3",
    },
    {
      src: "/assets/Hollis Brown-Student-ID-23166-Introduction to JavaScript Module.jpg",
      alt: "Certification 4",
    },
    {
      src: "/assets/Hollis Brown-Student-ID-23166-Asynchronous JavaScript Module.jpg",
      alt: "Certification 5",
    },
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <section id="introPage" class="gap-10 py-8 sm:py-14 mt-20 mb-40">
    <div
      class="flex flex-col lg:justify-center text-center gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-8xl">
        Hi! I'm <span class="poppins text-blue-500">Hollis</span> B.
        <br />Web
        <span class="poppins text-blue-500">Developer</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        My <span class="text-blue-500"> favorite tech</span> includes JavaScript,
        particularly Sveltekit and React.js — my projects are already picked out for that library and other more advanced tech — as well as Tailwind CSS—for now!
      </p>
      <a
        href="#connect"
        class="blueShadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-blue-500 opacity-20 group-hover:translate-x-full z-0 duration-200"
        />
        <h4 class="relative z-9">Get in touch &rarr;</h4>
      </a>
    </div>

    <!-- <div  class="flex p-0.5 relative max-w-[700px] w-full mx-auto">
          <div
              class="absolute inset-0 overflow-hidden rounded-md flex items-center justify-center"
          >
              <div
                  class="bg-gradient-to-r absolute inset-[-20px]  from-violet-800 to-indigo-800 specialSpin"
              />
          </div>

          <img
              src={"images/zetane-engine.jpeg"}
              alt="Zetane Engine"
              class="w-full h-full object-cover z-[2]"
          />
      </div> -->
  </section>
  <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-large sm:text-xl md:text-2xl">
        A few of my creative endeavors.
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curious to <span class="poppins text-blue-500">see</span> my work?
      </h3>
    </div>
    <div
      class="mx-auto text-4xl px-4 py-2 flex items-center gap-2 -mb-4 sm:-mb-0 mt-20"
    >
      <span class="poppins text-blue-500">Front-end</span>Projects
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 -mt-16">
      <Step step={steps[0]}>
        <p>
          The React Admin Dashboard is created with <strong
            class="text-blue-500">React.js, JSX</strong
          >
          & <strong class="text-blue-500">CSS</strong>! In this sleek project I
          focused on crafting a responsive admin template. Using a grid system
          for layout, I designed and styled various components like charts,
          lists, and containers using CSS.
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          The Weather App is created with <strong class="text-blue-500"
            >React.js</strong
          >,
          <strong class="text-blue-500">JSX</strong>
          & <strong class="text-blue-500">CSS</strong>! I utilized
          OpenWeatherMap and GeoDB APIs, showcasing interactive weather
          forecasts, search feature to fetch data, and city autocomplete
          features. I also got practice using the react-accordion and
          react-select-async-paginate UI packages.
        </p></Step
      >
      <Step step={steps[2]}>
        <p>
          The AI-designed Portfolio App is a <strong class="text-blue-500"
            >React & Tailwind CSS</strong
          >
          web application, hosted on, that uses
          <strong class="text-blue-500">Midjourney AI</strong>
          to generate a design for a web portfolio, that is responsive and will make
          UI/UX designers stare in awe at its sleek user interface.
        </p>
      </Step>
    </div>

    <div
      class="mx-auto text-4xl px-4 py-2 flex items-center gap-2 -mb-4 sm:-mb-0 -mt-2"
    >
      <span class="poppins text-blue-500">Back-end</span>Projects
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 -mt-16">
      <Step step={steps[3]}>
        <p>
          The Web Scraper Server is created with <strong class="text-blue-500"
            >Node.js</strong
          >
          & <strong class="text-blue-500">Express.js</strong>! In this backend
          project I learned to create API endpoints where I emply a web-scraper
          to fetch the financial profile and price history for any stock,
          process the information, and return it back to the requester. I
          enjoyed learning data fetching and secure API key-storing best
          practices.
        </p>
      </Step>
      <Step step={steps[4]}>
        <p>
          The CRON Job Server is created with <strong class="text-blue-500"
            >Cherrio</strong
          >,
          <strong class="text-blue-500">HTML, Node.js</strong>
          & <strong class="text-blue-500">Axios</strong>! In this oject I
          learned to fetch HTML from Reddit.com pages and parse through the data
          to retrieve/scrape subreddit activity data from a webpage, schedule
          the scraping at regular intervals, and saving the data to a database.
          Lastly I served up the data as a RESTful API.
        </p>
      </Step>
      <Step step={steps[5]}>
        <p>
          The Google Cloud Functions Project is hosted on
          <strong class="text-blue-500">Google Cloud Platform</strong>,
          leveraging
          <strong class="text-blue-500">Serverless computing</strong>. It
          demonstrates the use of cloud functions as an alternative to
          traditional server setups, highlighting their configuration and setup
          process compared to custom servers.
        </p>
      </Step>
    </div>

    <div
      class="mx-auto text-4xl px-4 py-2 flex items-center gap-2 -mb-4 sm:-mb-0 -mt-2"
    >
      <span class="poppins text-blue-500">Full-stack</span>Projects
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-10 -mt-16">
      <Step step={steps[6]}>
        <p>
          The Next.js E-commerce Project is built with <strong
            class="text-blue-500">Next.js, TailwindCss, Google Fonts,</strong
          >
          and <strong class="text-blue-500">Font Awesome icons</strong>. It
          features a complete e-commerce setup with a Stripe checkout system,
          advanced store layout using Context API for state management, and
          optimized component configurations for enhanced functionality.
        </p>
      </Step>
      <Step step={steps[7]}>
        <p>
          The Social Media App is created with <strong class="text-blue-500"
            >Next.js</strong
          >,
          <strong class="text-blue-500">React.js, Tailwind CSS</strong>
          & <strong class="text-blue-500">Node.js, Express.js & MySql</strong>!
          It is a dynamic platform built to connect users through interactive
          posts, comments, and profiles. It features responsive design, user
          authentication, real-time updates, and intuitive UI/UX for seamless
          navigation and engagement.
        </p>
      </Step>
      <Step step={steps[8]}>
        <p>
          The Chat App is a <strong class="text-blue-500"
            >React.js & Material UI</strong
          >
          web application, hosted on
          <strong class="text-blue-500">Firebase</strong>, that handles state
          managment witH
          <strong class="text-blue-500">Zustand</strong>! It features real-time
          chat functionality with emoji support, user authentication, and image
          uploads. The app has message filtering, user blocking, and dynamic
          user chat retrieval, enhancing user interaction and experience.
        </p>
      </Step>
      <Step step={steps[9]}>
        <p>
          The Polling Web App is a <strong class="text-blue-500"
            >JavaScript, HTML & CSS</strong
          >
          web application, hosted on
          <strong class="text-blue-500">Firebase</strong>, that has a
          <strong class="text-blue-500">Node.js</strong> server! It generates static
          webpages with client side rendering and server side rendering, persists
          data from an CRUD API using Firestore from Firebase, and it has a sleek
          UI!
        </p>
      </Step>
    </div>
  </section>
  <Certifications {certifications} />
  <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <!-- <div class="z-[-1] bg-violet-950 w-screen left-1/2 -translate-x-1/2 top-0 h-full absolute"> </div> -->
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-blue-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-blue-700 py-4"
    >
      <h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A bit <span class="poppins text-blue-500">about</span> me.
      </h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
      I am . . .
    </p>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#each benefits as benefit, index}
        <!-- <div class="flex flex-col gap-2 mx-auto">
                  <div class="flex items-end gap-4">
                      <p
                          class="poppins text-6xl sm:text-7xl md:text-8xl text-slate-500 font-medium"
                      >
                          {benefit.metric}
                      </p>
                      <p
                          class="text-xl sm:text-2xl md:text-3xl capitalize pb-2"
                      >
                          {benefit.name}
                      </p>
                  </div>
                  <p class="text-center italic">- {benefit.description}</p>
              </div> -->
        <div class="flex gap-6 sm:gap-8">
          <p
            class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
          >
            0{index + 1}
          </p>
          <div class="flex flex-col gap-6 sm:gap-8">
            <h3 class="text-2xl sm:text-3xl md:text-5xl">
              {benefit.name}
            </h3>
            <p>{benefit.description}</p>
          </div>
        </div>
      {/each}
    </div>
    <h5 class={" text-2xl sm:text-3xl font-semibold text-center poppins "}>
      The <span class="text-blue-500">Complete</span> Package
    </h5>
    <div
      class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full"
    >
      <table class="bg-white text-slate-700 rounded text-center">
        <thead class={"border-b border-solid border-slate-200  "}>
          <tr class="">
            <th />
            <th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
            <th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
            <th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
            <th class="bg-blue-700 text-white whitespace-nowrap p-4 px-8">Me</th
            >
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
              >Dedication</td
            >
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
          <tr class="border-b border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
              >Critical Thought</td
            >
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
          <tr>
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
              >Interpersonal Skills</td
            >
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
          <tr class="border-t border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
              >Progamming Ability</td
            >
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
      <p>Scroll to see more &rarr;</p>
    </div>
    <p id="connect" class="mx-auto text-xl">So why not invest?</p>
  </section>
</main>

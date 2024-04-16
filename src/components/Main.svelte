<script>
  import Step from "./Step.svelte";

  let steps = [
      {
          name: "React Info Site",
          icon: "fa-solid fa-book",
          description:
              "React Info Site is created with React.js, Vite, HTML5, and CSS3! It is a simple informational website about React where I implemented JSX, custom components, styling, and static pages along with other concepts as part of my learning journey of the React UI library.",
      },
      {
          name: "AirBnB Clone Site",
          icon: "fa-solid fa-bed",
          description:
              "AirBnB Clone Site is created with React.js, Vite, HTML5, and CSS3! It is a sleek user interface where I implemented both the props and mapping data along with other concepts as part of my learning journey of the React UI library.",
      },
      {
          name: "Simple API Project",
          icon: "fa-solid fa-code",
          description:
              "Simple API Project is a Vanilla JavaScript, HTML5, and CSS3 web application! It is a 4 page application where I implemented many asynchronous JavaScript techniques to fetch data from an API and display information from the dataset in a simple sleek user interface.",
      },
  ];

  let benefits = [
      {
          metric: "10x",
          name: "A bootcamp student & self-taught developer",
          description:
              "I am currently enrolled in the coding program at Bay Valley Tech Code Academy. In addition to my bootcamp studies, I an a self-taught developer who has used free online resources to expand my knowledge and skills. I have a deep passion for the creative and problem-solving aspects of developing innovative online experiences. I started with JavaScript, HTML & CSS and have since advanced to mastering JavaScript frameworks. I am also actively expanding my expertise in backend programming, design, and cloud services.",
      },
              {
          name: "A detailed-oriented approach",
          description:
              "As a junior developer, I prioritize attention to detail in my work. I have a meticulous nature when it comes to coding, ensuring clean and well-structured code that adheres to best practices. This focus on detail enables me to deliver high-quality solutions and contribute to the overall success of projects.",
      },
      {
          name: "A good communicator",
          description:
              "Effective Communication and Collaboration: I prioritize the value of communication and believe in fostering transparent and constructive interactions. By cultivating open lines of communication, I build strong relationships and contribute to the effectiveness and productivity of any team and work environment.",
      },
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <section
      id="introPage"
      class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
      <div
          class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
      >
          <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
              Hi! I'm <span class="poppins text-violet-400">Hollis</span> Brown
              <br />WeB
              <span class="poppins text-violet-400">Developer</span>
          </h2>
          <p class="text-base sm:text-lg md:text-xl">
              My <span class="text-violet-400"> favorite tech</span> includes JavaScript, particularly SvelteKit and React.js, as well as Tailwind CSS—for now!
          </p>
          <button
              class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
          >
              <div
                  class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
              />
              <h4 class="relative z-9">Get in touch &rarr;</h4>
          </button>
      </div>
      <div class="relative shadow-2xl grid place-items-center">
          <img
              src={"https://i.imgur.com/GoyrRA6.png"}
              alt="Image of Hollis"
              class="object-cover z-[2] max-h-[70vh]"
          />
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
              Curious to <span class="poppins text-violet-400">see</span> my work?
          </h3>
      </div>
      <a
          href=""
          target="_blank"
          class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
      >
          <i class="fa-regular fa-circle-play" />
          <p>Watch the video</p>
      </a>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
          <Step step={steps[0]}>
              <p>
                  The React Info Site is created with <strong
                      class="text-violet-400"
                      >React.js, HTML</strong
                  > & <strong class="text-violet-400">CSS</strong>! It is a simple informational website about React where I implemented JSX, custom components, styling, and static pages along with other concepts as part of my learning journey of the React UI library. 
              </p>
          </Step>
          <Step step={steps[1]}>
              <p>
                  The AirBnB Clone Site is created with <strong
                      class="text-violet-400">React.js</strong
                  >,
                  <strong class="text-violet-400"> Vite, HTML</strong
                  >
                  & <strong class="text-violet-400">CSS</strong>! It is a sleek user interface where I implemented both the props and mapping data along with other concepts as part of my learning journey of the React UI library.
              </p>
          </Step>
          <Step step={steps[2]}>
              <p>
                  The Simple API Project is a <strong class="text-violet-400"
                      >Vanilla JS, HTML, & CSS</strong
                  >
                  web application, hosted on
                  <strong class="text-violet-400">Netlify</strong>, that
                  consumes and caches the
                  <strong class="text-violet-400">Jsonplaceholder API</strong>
                  to display information from employee datasets. It implements several asynchronous JavaScript techniques and has a sleek user interface.
              </p>
          </Step>
      </div>
  </section>
  <section
      id="about"
      class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
      <!-- <div class="z-[-1] bg-violet-950 w-screen left-1/2 -translate-x-1/2 top-0 h-full absolute"> </div> -->
      <div
          class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
      >
          <h6 class="text-large sm:text-xl md:text-2xl">
              Want to know more?
          </h6>
          <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
              A bit <span class="poppins text-violet-400">about</span> me.
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
          The <span class="text-violet-400">Complete</span> Package
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
                      <th
                          class="bg-violet-700 text-white whitespace-nowrap p-4 px-8"
                          >Me</th
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
      <p class="mx-auto">So why not invest?</p>
  </section>
</main>

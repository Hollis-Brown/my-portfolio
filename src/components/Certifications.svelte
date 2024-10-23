<!-- Certifications.svelte -->

<script>
  // Props
  export let certifications;

  // Current certification index state
  let currentCertificationIndex = 0;

  // Function to handle navigation to the previous certification
  function prevCertification() {
    currentCertificationIndex = (currentCertificationIndex - 1 + certifications.length) % certifications.length;
    updateCertificationImage();
  }

  // Function to handle navigation to the next certification
  function nextCertification() {
    currentCertificationIndex = (currentCertificationIndex + 1) % certifications.length;
    updateCertificationImage();
  }

  // Function to update the certification image
  function updateCertificationImage() {
    if (typeof document !== 'undefined') {
      const certificationImageElement = document.getElementById('certificationImage');
      if (certificationImageElement) {
        certificationImageElement.src = certifications[currentCertificationIndex].src;
        certificationImageElement.alt = certifications[currentCertificationIndex].alt;
      }
    }
  }

  // Initial image load
  import { onMount } from 'svelte';
  onMount(updateCertificationImage);
</script>

<section id="certifications" class="py-0 lg:py-32 flex flex-col gap-24">
  <div class="flex flex-col gap-2 text-center">
    <h6 class="text-large sm:text-xl md:text-2xl">Achievements</h6>
    <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
      My <span class="poppins text-blue-500">Certifications</span>
    </h3>
  </div>
  <div class="mx-auto flex flex-col items-center">
    <img
      id="certificationImage"
      class="w-full max-w-md"
      alt="Certification"
    />
    <div class="flex gap-4 mt-12">
      <button
        on:click={prevCertification}
        class="blueShadow relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-blue-500 opacity-20 group-hover:translate-x-full z-0 duration-200"
        ></div>
        <h4 class="relative z-9">&larr; Backward</h4>
      </button>
      <button
        on:click={nextCertification}
        class="blueShadow relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-blue-500 opacity-20 group-hover:translate-x-full z-0 duration-200"
        ></div>
        <h4 class="relative z-9">Forward &rarr;</h4>
      </button>
    </div>
  </div>
</section>

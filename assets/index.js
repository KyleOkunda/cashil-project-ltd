window.onload = function () {
  //Change navbar style on scroll
  window.addEventListener("scroll", function () {
    const navbar = document.getElementsByTagName("header")[0];
    if (window.scrollY > 50) {
      navbar.classList.add("bg-navy/95", "backdrop-blur-md");
      navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.remove("bg-navy/95", "backdrop-blur-md");
      navbar.classList.add("bg-transparent");
    }
  });

  // Animate on scroll
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("translate-y-8", "opacity-0");
        entry.target.classList.add("translate-y-0", "opacity-100");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".transition-all").forEach((el) => {
    el.classList.add("opacity-0", "translate-y-8");
    observer.observe(el);
  });

  //Nav responsiveness
  var menuBtn = document.getElementsByClassName("lg:hidden")[0];
  var mobileNav = document.getElementsByClassName("mobile-nav")[0];
  console.log(mobileNav);
  var menuLogo = menuBtn.innerHTML;
  menuBtn.addEventListener("click", function () {
    if (mobileNav.classList.contains("showing")) {
      mobileNav.classList.remove("showing");
      mobileNav.parentElement.style.maxHeight = "0px";
      mobileNav.style.display = "none";
      menuBtn.innerHTML = menuLogo;
    } else {
      mobileNav.classList.add("showing");
      mobileNav.parentElement.style.maxHeight = "none";
      mobileNav.style.display = "";
      menuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-6 w-6"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>`;
    }
  });

  // Demo request functionality
  const demoButtons = document.querySelectorAll("button");
  demoButtons.forEach((button) => {
    if (
      button.textContent.includes("Get Quote") ||
      button.textContent.includes("Start Project")
    ) {
      button.addEventListener("click", function () {
        // Create demo request modal
        const modal = document.createElement("div");
        modal.className =
          "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4";
        modal.innerHTML = `
                        <div data-state="open" class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" style="pointer-events: auto;" data-aria-hidden="true" aria-hidden="true"></div>
                        <div
  role="dialog"
  id="radix-:r4:"
  aria-describedby="radix-:r6:"
  aria-labelledby="radix-:r5:"
  data-state="open"
  class="dialog-box fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg sm:max-w-lg bg-white-arch border-0 p-0 overflow-hidden"
  tabindex="-1"
  style="pointer-events: auto"
>
  <div class="p-6">
    <div class="flex flex-col space-y-1.5 text-center sm:text-left mb-6">
      <h2
        id="radix-:r5:"
        class="font-semibold tracking-tight font-industrial text-xl uppercase text-navy"
      >
        Contact Details
      </h2>
    </div>
    <div class="space-y-4">
      <div>
        <label
          class="font-mono text-xs uppercase tracking-wider text-steel block mb-2"
          >Full Name *</label
        ><input
          type="text"
          class="input w-full p-3 border border-border bg-transparent font-body text-navy focus:border-amber outline-none transition-colors"
          placeholder="John Doe"
          value=""
          required
        />
      </div>
      <div>
        <label
          class="font-mono text-xs uppercase tracking-wider text-steel block mb-2"
          >Email *</label
        ><input
          type="email"
          class="input w-full p-3 border border-border bg-transparent font-body text-navy focus:border-amber outline-none transition-colors"
          placeholder="john@company.com"
          value=""
          required
        />
      </div>
      <div>
        <label
          class="font-mono text-xs uppercase tracking-wider text-steel block mb-2"
          >Phone *</label
        ><input
          type="tel"
          class="input w-full p-3 border border-border bg-transparent font-mono text-navy focus:border-amber outline-none transition-colors"
          placeholder="+254 700 000 000"
          value=""
          required
        />
      </div>
      <div>
        <label
          class="font-mono text-xs uppercase tracking-wider text-steel block mb-2"
          >Project Type *</label
        >
        <select
          class="input w-full p-3 border border-border bg-transparent font-body text-navy focus:border-amber outline-none transition-colors"
        >
          <option value="construction">Construction</option>
          <option value="interior-design">Interior Design</option>
        </select>
      </div>
      <div>
        <label
          class="font-mono text-xs uppercase tracking-wider text-steel block mb-2"
          >Additional Notes</label
        ><textarea
          class="input w-full p-3 border border-border bg-transparent font-body text-navy focus:border-amber outline-none transition-colors resize-none"
          rows="3"
          placeholder="Brief project description..."
        ></textarea>
      </div>
    </div>
    <div class="flex justify-between mt-8 pt-6 border-t border-border">
      <button
      type="submit"
      id="submit-request"
        class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-navy text-white-arch font-mono uppercase tracking-wider rounded-none hover:bg-amber hover:text-navy shadow-industrial hover:-translate-y-0.5 hover:shadow-lift h-10 px-6 py-2"
        disabled=""
      >
        Submit Request<svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-send"
        >
          <path
            d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
          ></path>
          <path d="m21.854 2.147-10.94 10.939"></path>
        </svg>
      </button>
    </div>
  </div>
  <button
    id="close-modal"
    type="button"
    class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-x h-4 w-4"
    >
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path></svg
    ><span class="sr-only">Close</span>
  </button>
</div>

                    `;

        document.body.appendChild(modal);

        var inputs = modal.querySelectorAll("input, select, textarea");
        inputs.forEach((input) => {
          input.addEventListener("input", function () {
            var name = modal.querySelector('input[type="text"]').value;
            var email = modal.querySelector('input[type="email"]').value;
            var phone = modal.querySelector('input[type="tel"]').value;
            var projectType = modal.querySelector("select").value;
            var notes = modal.querySelector("textarea").value;

            if (name && email && phone && projectType) {
              //Validate required fields
              if (!email.includes("@") || !email.includes(".")) {
                modal
                  .querySelector("#submit-request")
                  .setAttribute("disabled", "");
                return;
              }
              console.log("Email validated");
              if (phone.length < 10 || phone.length > 15) {
                modal
                  .querySelector("#submit-request")
                  .setAttribute("disabled", "");
                return;
              }
              console.log("Phone validated", phone.length);
              modal
                .querySelector("#submit-request")
                .removeAttribute("disabled");

              modal
                .querySelector("#submit-request")
                .addEventListener("click", function (e) {
                  e.preventDefault();
                  console.log("Request submitted");
                  // Show submission success message
                  document.getElementsByClassName("dialog-box")[0].innerHTML = `

  <div class="p-6">
    <div class="text-center py-8">
      <div
        class="w-16 h-16 bg-amber/20 rounded-full flex items-center justify-center mx-auto mb-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-check w-8 h-8 text-amber"
        >
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
      </div>
      <h3 class="font-industrial text-xl uppercase text-navy mb-2">
        Request Received
      </h3>
      <div class="bg-navy p-4 mb-6 mt-6">
        <p class="font-industrial text-sm uppercase text-amber mb-2">
          Information Submitted:
        </p>
        <ul class="font-mono text-xs text-white-arch/70 space-y-1 text-left">
          <li>• Name: <span id="name"></span> </li>
          <li>• Email: <span id="email"></span></li>
          <li>• Phone: <span id="tel"></span></li>
          <li>• Project Type: <span id="project"></span></li>
          <li>• Additional Notes: <span id="message"></span></li>
        </ul>
      </div>
      <p class="font-body text-sm text-steel mb-6">
        Our team will review your requirements and get back to you within 24
        hours.
      </p>
    </div>
  </div>
                  `;

                  // Update the content of the spans with actual values
                  document.getElementById("name").textContent = name;
                  document.getElementById("email").textContent = email;
                  document.getElementById("tel").textContent = phone;
                  document.getElementById("project").textContent = projectType;
                  document.getElementById("message").textContent = notes;
                });
            } else {
              modal
                .querySelector("#submit-request")
                .setAttribute("disabled", "");
            }
          });
        });

        modalCloseBtn = document.getElementById("close-modal");
        modalCloseBtn.addEventListener("click", function () {
          modal.remove();
        });

        // Close modal when clicking outside
        modal.children[0].addEventListener("click", function (e) {
          if (e.target === modal.children[0]) {
            modal.remove();
          }
        });
      });
    }
  });
};

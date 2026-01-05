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
      button.textContent.includes("Start Project Wizard")
    ) {
      button.addEventListener("click", function () {
        // Create demo request modal
        const modal = document.createElement("div");
        modal.className =
          "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4";
        modal.innerHTML = `
                        <div data-state="open" class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" style="pointer-events: auto;" data-aria-hidden="true" aria-hidden="true"></div>
                        <div role="dialog" id="radix-:rv:" aria-describedby="radix-:r11:" aria-labelledby="radix-:r10:" data-state="open" class="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg sm:max-w-lg bg-white-arch border-0 p-0 overflow-hidden" tabindex="-1" style="pointer-events: auto;"><div class="flex border-b border-border"><div class="flex-1 py-3 text-center font-mono text-xs uppercase tracking-wider transition-colors bg-amber text-navy">Step 1</div><div class="flex-1 py-3 text-center font-mono text-xs uppercase tracking-wider transition-colors bg-muted text-steel">Step 2</div><div class="flex-1 py-3 text-center font-mono text-xs uppercase tracking-wider transition-colors bg-muted text-steel">Step 3</div></div><div class="p-6"><div class="flex flex-col space-y-1.5 text-center sm:text-left mb-6"><h2 id="radix-:r10:" class="font-semibold tracking-tight font-industrial text-xl uppercase text-navy">Project Type</h2></div><div class="grid grid-cols-2 gap-4"><button class="p-6 border-2 transition-all duration-300 border-border hover:border-steel"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building2 mx-auto mb-3 text-steel"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg><span class="font-industrial text-sm uppercase block text-navy">Construction</span><span class="font-mono text-xs text-steel mt-1 block">Civil Works, Roads, Buildings</span></button><button class="p-6 border-2 transition-all duration-300 rounded-sm border-border hover:border-steel"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette mx-auto mb-3 text-steel"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg><span class="font-editorial text-sm italic block text-navy">Interior Design</span><span class="font-mono text-xs text-steel mt-1 block">Fit-outs, Decor, Styling</span></button></div><div class="flex justify-between mt-8 pt-6 border-t border-border"><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground rounded-sm h-10 px-6 py-2 text-steel" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"></path></svg>Back</button><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-navy text-white-arch font-mono uppercase tracking-wider rounded-none hover:bg-amber hover:text-navy shadow-industrial hover:-translate-y-0.5 hover:shadow-lift h-10 px-6 py-2" disabled="">Continue<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg></button></div></div><button type="button" class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-4 w-4"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg><span class="sr-only">Close</span></button></div>
                    `;
        console.log(modal);
        document.body.appendChild(modal);

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

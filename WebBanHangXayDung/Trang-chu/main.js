
  // -------------------------------
  // 1. SẢN PHẨM NỔI BẬT
  // -------------------------------
  const featuredSection = document.querySelector(".section-product-featured");
  const featuredTrack = featuredSection.querySelector("#carouselTrack");
  const featuredDots = featuredSection.querySelector("#carouselDots");
  const featuredPrevBtn = featuredSection.querySelector(".prev-btn");
  const featuredNextBtn = featuredSection.querySelector(".next-btn");

  const featuredItems = featuredTrack.querySelectorAll(".product-item");
  const featuredItemsPerSlide = 2;
  const featuredTotalSlides = Math.floor(featuredItems.length / featuredItemsPerSlide);
  let featuredCurrentSlide = 0;

  featuredDots.innerHTML = "";
  for (let i = 0; i < featuredTotalSlides; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      featuredCurrentSlide = i;
      updateFeaturedCarousel();
    });
    featuredDots.appendChild(dot);
  }

  function updateFeaturedCarousel() {
    featuredTrack.style.transform = `translateX(-${featuredCurrentSlide * 100}%)`;
    featuredDots.querySelectorAll(".dot").forEach((d, i) => {
      d.classList.toggle("active", i === featuredCurrentSlide);
    });
  }

  featuredPrevBtn.addEventListener("click", () => {
    featuredCurrentSlide = (featuredCurrentSlide - 1 + featuredTotalSlides) % featuredTotalSlides;
    updateFeaturedCarousel();
  });

  featuredNextBtn.addEventListener("click", () => {
    featuredCurrentSlide = (featuredCurrentSlide + 1) % featuredTotalSlides;
    updateFeaturedCarousel();
  });

  setInterval(() => {
    featuredCurrentSlide = (featuredCurrentSlide + 1) % featuredTotalSlides;
    updateFeaturedCarousel();
  }, 4000);

  // -------------------------------
  // 2. SẢN PHẨM (menu chính)
  // -------------------------------
  const productSection = document.querySelector(".section-product");
  const productTrack = productSection.querySelector("#productCarouselTrack");
  const productDots = productSection.querySelector("#productCarouselDots");
  const productPrevBtn = productSection.querySelector(".prev-btn");
  const productNextBtn = productSection.querySelector(".next-btn");

  if (productTrack) {
    const productItems = productTrack.querySelectorAll(".product-item");
    const productItemsPerSlide = 2;
    const productTotalSlides = Math.floor(productItems.length / productItemsPerSlide);
    let productCurrentSlide = 0;

    if (productDots) {
      productDots.innerHTML = "";
      for (let i = 0; i < productTotalSlides; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => {
          productCurrentSlide = i;
          updateProductCarousel();
        });
        productDots.appendChild(dot);
      }
    }

    function updateProductCarousel() {
      productTrack.style.transform = `translateX(-${productCurrentSlide * 100}%)`;
      if (productDots) {
        productDots.querySelectorAll(".dot").forEach((d, i) => {
          d.classList.toggle("active", i === productCurrentSlide);
        });
      }
    }

    if (productPrevBtn && productNextBtn) {
      productPrevBtn.addEventListener("click", () => {
        productCurrentSlide = (productCurrentSlide - 1 + productTotalSlides) % productTotalSlides;
        updateProductCarousel();
      });

      productNextBtn.addEventListener("click", () => {
        productCurrentSlide = (productCurrentSlide + 1) % productTotalSlides;
        updateProductCarousel();
      });
    }

    setInterval(() => {
      productCurrentSlide = (productCurrentSlide + 1) % productTotalSlides;
      updateProductCarousel();
    }, 4000);
  }

  // -------------------------------
  // 3. DỊCH VỤ XÂY DỰNG
  // -------------------------------
  const serviceSection = document.querySelector(".section-service-carousel");
  const serviceTrack = serviceSection.querySelector("#serviceCarouselTrack");
  const serviceDots = serviceSection.querySelector("#serviceCarouselDots");
  const servicePrevBtn = serviceSection.querySelector(".prev-btn");
  const serviceNextBtn = serviceSection.querySelector(".next-btn");

  const serviceItems = serviceTrack.querySelectorAll(".slide-item");
  const serviceItemsPerSlide = 2;
  const serviceTotalSlides = Math.floor(serviceItems.length / serviceItemsPerSlide);
  let serviceCurrentSlide = 0;

  serviceDots.innerHTML = "";
  for (let i = 0; i < serviceTotalSlides; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      serviceCurrentSlide = i;
      updateServiceCarousel();
    });
    serviceDots.appendChild(dot);
  }

  function updateServiceCarousel() {
    serviceTrack.style.transform = `translateX(-${serviceCurrentSlide * 100}%)`;
    serviceDots.querySelectorAll(".dot").forEach((d, i) => {
      d.classList.toggle("active", i === serviceCurrentSlide);
    });
  }

  servicePrevBtn.addEventListener("click", () => {
    serviceCurrentSlide = (serviceCurrentSlide - 1 + serviceTotalSlides) % serviceTotalSlides;
    updateServiceCarousel();
  });

  serviceNextBtn.addEventListener("click", () => {
    serviceCurrentSlide = (serviceCurrentSlide + 1) % serviceTotalSlides;
    updateServiceCarousel();
  });

  setInterval(() => {
    serviceCurrentSlide = (serviceCurrentSlide + 1) % serviceTotalSlides;
    updateServiceCarousel();
  }, 4000);

new Splide(".splide", {
  type: "loop",
  speed: 600,
  padding: "20%",
  perPage: 2,
  perMove: 1,
  wheel: true,
  releaseWheel: true,
  trimSpace: false,
  focus: "center",
  updateOnMove: false,
  breakpoints: {
    640: {
      perPage: 2,
    },
    500: {
      destroy: true,
    },
  },
}).mount();

import Alpine from "alpinejs";

window.Alpine = Alpine;

interface WinStore {
  width: number;
  is_small: () => boolean;
}

Alpine.store("win", {
  width: window.innerWidth,
  is_small: () => {
    return Alpine.store("win").width < 640;
  },
} as WinStore);

Alpine.start();

window.addEventListener("resize", () => {
  Alpine.store("win").width = window.innerWidth;
});

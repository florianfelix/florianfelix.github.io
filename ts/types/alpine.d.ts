import Alpine from "alpinejs";
import type { Window as WindowType } from "./global"; // Import the Window type for merging with verbatimModuleSyntax: true.

declare global {
  /**
   * Extends the global Window interface to include the Alpine object.
   * This allows TypeScript to recognize window.Alpine.
   */
  interface Window extends WindowType {
    Alpine: any; // Using 'any' for simplicity, consider creating a more specific type if needed.
  }
}

declare module "alpinejs" {
  /**
   * Extends the Alpine.js Stores interface to include the custom 'win' store.
   * This provides type information for the 'win' store's properties.
   */
  interface Stores {
    win: {
      width: number; // The width of the window.
      is_small: () => boolean; // A function to determine if the window is considered "small".
    };
  }
}

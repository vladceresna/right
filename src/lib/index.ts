import Root, {
  type ButtonProps,
  type ButtonSize,
  type ButtonVariant,
  buttonVariants,
} from "./ui/button/button.svelte";

export {
  Root,
  type ButtonProps as Props,
  //
  Root as Button,
  buttonVariants,
  type ButtonProps,
  type ButtonSize,
  type ButtonVariant,
};

import { default as ModeSwitcher } from "./ui/mode-switcher/mode-switcher.svelte";
export { ModeSwitcher };

import { default as WithDark } from "./theme/WithDark.svelte";
export { WithDark };

import { default as Inter } from "./fonts/Inter.svelte";
export { Inter };

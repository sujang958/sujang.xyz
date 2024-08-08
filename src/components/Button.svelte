<script>
  import { twMerge } from "tailwind-merge"
</script>

<button
  type="button"
  class={twMerge(
    "flex flex-row items-center justify-center px-3 py-1.5 rounded-lg bg-neutral-900 text-sm text-white gap-x-2",
    $$props.class,
  )}
>
  <slot /></button
>

import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export function useCva(baseClass: string, config = { variants: {}, compoundVariants: [], defaultVariants: {} }, defaultValues: Record<string, unknown> = {}, extraValues: string[] = []) {
  if (config === undefined || config === null) return '';

  const elementStyles = cva(baseClass, config);
  const mergedClasses = elementStyles(defaultValues);

  return twMerge(mergedClasses, ...extraValues);
}

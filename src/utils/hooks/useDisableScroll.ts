import { useEffect } from 'react';

interface UseDisableScrollParams {
  dep: boolean;
  className: string;
  htmlElement: HTMLElement;
}

export const useDisableScroll = ({ dep, className, htmlElement }: UseDisableScrollParams) => {
  useEffect(() => {
    if (dep) {
      htmlElement.classList.add(className);
    } else {
      htmlElement.classList.remove(className);
    }

    return () => htmlElement.classList.remove(className);
  }, [dep]);
};

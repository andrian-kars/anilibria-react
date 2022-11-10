import { useEffectOnce } from '../useEffectOnce/useEffectOnce';

export const usePlayer = () => {
  useEffectOnce(() => {
    const script = document.createElement('script');
    script.src = 'public/assets/player.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  });
};

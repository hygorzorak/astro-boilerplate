import { useLittera as useReactLittera } from '@assembless/react-littera';

import { placeholder } from './keys';
import { componentExample } from './keys/components';
import { pageExample } from './keys/pages';

export const translations = {
  // GLOBAL
  ...placeholder,
  // COMPONENTS
  ...componentExample,
  // PAGES
  ...pageExample,
};

export function useLittera() {
  return useReactLittera(translations);
}

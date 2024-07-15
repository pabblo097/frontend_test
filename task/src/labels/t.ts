import { labels } from './labels';

export function _t(id: string) {
   return labels[id] ?? 'WRONG LABEL ID';
}

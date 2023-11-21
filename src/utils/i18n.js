import { keyboard } from '@testing-library/user-event/dist/keyboard';
import languageConfig from './lang.json';

const I18n =({lang, keyword}) => {
 return languageConfig[lang][keyword];
}

export default I18n;
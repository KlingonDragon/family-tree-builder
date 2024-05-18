import './js/prototype.js';
import { $, _ } from './js/dom.js';
const aside = $('aside');
if (aside) {
    $('footer')?._(_('button').on('click', () => aside.dataset.open = '')._('Open Aside'));
    aside._(_('button').on('click', () => delete aside.dataset.open)._('Close Aside'));
}
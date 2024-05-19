import './js/prototype.js';
import './js/edit-person.js';
import { $, _ } from './js/dom.js';
const aside = $('edit-person-aside');
if (aside) {
    $('footer')?.$('nav')?._(_('button').on('click', () => aside.open())._('Open Aside'));
}
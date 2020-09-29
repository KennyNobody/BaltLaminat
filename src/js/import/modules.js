var $ = require('jquery');

window.JQ = $;

import cookie from 'jquery.cookie';

console.log(cookie);

window.$ = $;

window.cookie = cookie;

console.log($.cookie)

import "./ui";

import "%modules%/header/header";
// import "%modules%/footer/footer";
import "%modules%/modal/modal";
import "%modules%/product/product"; // Врап/анврап
import "%modules%/slider/slider";
import "%modules%/map/map";
import "%modules%/filter/filter";

import "%modules%/mmenu/mmenu";

import "%modules%/lk-auth/lk-auth";
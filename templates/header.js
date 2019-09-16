/*
@url:   charlle.com
@title: Charlle
@template:  Header

        
*/

import {html, render} from 'lit-html';

// Determine whether browser is mobile

if (data.browser == 'mobile') {

let header = (data) => html `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>${data.title}</title>

  <base href="http://www.charlle.com/mobile/" />
  <base target="_self">

  <meta name="keywords" content="${data.keywords}" />
  <meta name="description" content="${data.description}" />

  <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
  <meta http-equiv="Content-Language" content="en-us">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <meta http-equiv="Content-Script-Type" content="text/javascript">

  <meta name="author" content="Charlle">
  <meta name="copyright" content="Copyright (c) 2010-2019 Charlle.">

  <link rel="start" title="Charlle.com home" href="/">
  <link rel="icon" href="../assets/images/icon.ico" type="image/x-icon">'
`;

} else {

}

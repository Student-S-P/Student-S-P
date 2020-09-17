/**********************************************************************/
/*! \file  sharedFeatures.js
 * \author Seth Peterson
 * \par    Course: CSD 122
 * \par    Assigment: Final Project
 * \date   2020-03-17
 * \brief
 *     This file contains jQuery code that generates the nav and footer
 *     sections of each page.
 */
/**********************************************************************/
"use strict";

//Create the nav and footer elements in each page.
$(document).ready(function() {
  //Make the nav element:
  //  1. Create a nav bar and an unordered list
  //  2. Populate it (take care - index.html needs special href)
  //  3. Place it inside the header, just after the first h1 element
  $("#header").append("<nav id='navBar'></nav>");
  $("#navBar").append("<ul id=navList></ul>");
  let references = ["index","audio","art","projects","contact"];
  let labels = ["Home","Audio","Art","Projects","Contact"];
  for(let i=0; i<references.length; ++i)
  {
    $("#navList").append("<li><a href='"+references[i]+".html'>"+labels[i]+"</a></li>");
  }
  $("#footer").append("<section><p>555-555-5555</p></section>");
  $("#footer").append("<section><p>&copy;2020 Seth Peterson</p></section>");
});

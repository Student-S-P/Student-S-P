/**********************************************************************/
/*! \file  playSound.js
 * \author Seth Peterson
 * \par    email: s-seth.peterson\@lwtech.edu
 * \par    Course: CSD 122
 * \par    Assigment: Project
 * \date   2020-02-25
 * \brief
 *     This file contains functions that interact with user input.
 */
/**********************************************************************/
"use strict"

//Sign up parts of the document to listen for user interaction:
//  1. Hover over the nav bar (silent until the user has clicked)
//  2. Clicking on the suggested text.
$(document).ready(function() {
  //const clickToAuthorize = $("#click-to-authorize");
  const audio = document.getElementById("hoverNavItem");
  const audio2 = document.getElementById("selectNavItem");
  $("nav ul li a").mouseover(() => audio.play());
  $("h1#auth").click(() => audio2.play());
  //$("nav ul li a").mouseout(() => audio.pause());
});

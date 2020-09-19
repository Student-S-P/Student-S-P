/**********************************************************************/
/*! \file  projectSwap.js
 * \author Seth Peterson
 * \date   2020-09-13
 * \brief
 *     This file contains jQuery code that swaps the contents in the main
 *     body of the Projects page.
 */
/**********************************************************************/

"use strict";

//Wrapper is necessary so the DOM elements exist.
$(document).ready(function()
  {
    //Hide all the main duplicates at the bottom of the page.
    $('main').not('header + main').addClass('Hidden');
    //Hide all the slides.
    $('ul#slider li').addClass('Hidden');

    $('ul#thumbs li img').click(
      function() {
	let nextImage = $(this).attr('value');
	$(nextImage).removeClass('Hidden').css('z-index',0);
	$('ul#slider li').not(nextImage).css('z-index',-1);
      });
  

    $('input[type=radio][name="projectSelector"]').change(
      function() {
	let nextProject = this.value;
	//Detach radio buttons.
	var swapButton = $('div.switch-field').detach();
	//Remove the current child of main.
	var bodyOld = $('header + main').addClass('Hidden').detach();
	//Find the next main to use, make it visible, and place it.
	var bodyNew = $('main, #'+nextProject).removeClass('Hidden').detach();
	/*
	console.log("New Body: ");
	console.log(bodyNew);
	console.log("Old Body: ");
	console.log(bodyOld);
	*/
	$(bodyNew).insertAfter('header');
	//Reattach radio buttons
	$(swapButton).insertBefore('main > .main-column');
	$(bodyOld).insertAfter('body');
      });
  });

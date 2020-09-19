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
    $('.slider li').addClass('Hidden');

    $('ul.thumbs li img').click(
      function() {
	let nextImage = $(this).attr('value');
	//Make element visible.
	$(nextImage).removeClass('Hidden');
	//Start fade in sequence.
	$('ul.slider li').not(nextImage).removeClass('fade-in').addClass('Hidden');
	//Animate fading in.
	$(nextImage).addClass('fade-in');
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

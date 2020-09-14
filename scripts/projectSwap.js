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
    $('input[type=radio][name="projectSelector"]').change(
      function() {
	let nextProject = this.value;
	//Detach radio buttons.
	var swapButton = $('div.switch-field').detach();
	//Remove the current child of main.
	var bodyOld = $('body > main').addClass('Hidden').detach();
	//Find the next main to use, make it visible, and place it.
	var bodyNew = $('main#'+nextProject).removeClass('Hidden').detach().insertAfter('header');
	//Reattach radio buttons
	$(swapButton).insertAfter('body > main');
	$(bodyOld).insertAfter('body');
      });
  });

/**********************************************************************/
/*! \file  email_list.js
 * \author Seth Peterson
 * \par    email: s-seth.peterson\@lwtech.edu
 * \par    Course: CSD 122
 * \par    Assigment: 5
 * \date   2020-03-18
 * \brief
 *     This file contains event listeners for buttons in the email_list
 *     index.html file, implemented with jQuery.
 */
/**********************************************************************/
/* This function is called when Join List is clicked.
 * It validates the values contained in the form, submitting them when
 *   they are all valid.
 */
function joinList()
{
  var emailAddress1 = $("#email_address1").val();
  var emailAddress2 = $("#email_address2").val();
  var isValid = true;

  /*
  var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$/;
  // validate the first email address
  if (emailAddress1 == "") { 
    $("#email_address1").next().text("This field is required.");
    isValid = false;
  } else {
    //Email has a value, we must test it.
    if(emailRegex.test($("#email_address1").text()))
    {
      //Valid email blank message.
      $("#email_address1").next().text("");
    } else {
      //Invalid email message.
      $("#email_address1").next().text("Invalid entry format, try: example@website.ext");
    }
  } 

  // validate the second email address
  // NOTE - no extra validation required, it is forced to be equal to
  //   the first email, and by extension gains restrictions from there.
  if (emailAddress2 == "") { 
    $("#email_address2_error").text("This field is required.");
    isValid = false; 
  } else if (emailAddress1 !== emailAddress2) { 
    $("#email_address2").next().text("This entry must equal first entry.");
    isValid = false;
  } else {
    $("#email_address2").next().text("");
  }
  */

  // Names are defined as at least two non whitespace characters.
  var nameRegex = /^[^\s][^\s]+$/;
  // validate the first name entry  
  if ($("#first_name").val() == "") {
    $("#first_name").next().text("This field is required.");
    isValid = false;
  } 
  else {
    if(nameRegex.test($("#first_name").val()))
    {
      //Valid name message.
      $("#first_name").next().text("");
    } else {
      $("#first_name").next().text("Must be two adjacent non whitespace characters");
    }
  }

  if ($("#last_name").val() == "") {
    $("#last_name").next().text("This field is required.");
    isValid = false;
  } 
  else {
    if(nameRegex.test($("#last_name").val()))
    {
      //Valid name message.
      $("#last_name").next().text("");
    } else {
      $("#last_name").next().text("Must be two adjacent non whitespace characters");
    }
  }

  if ($("#subject").val() == "") {
    $("#subject").next().text("This field is required.");
    isValid = false;
  } 
  else {
    if(nameRegex.test($("#subject").val()))
    {
      //Valid name message.
      $("#subject").next().text("");
    } else {
      $("#subject").next().text("Must be two adjacent non whitespace characters");
    }
  }

  // submit the form if all entries are valid
  if (isValid) {
    $("#email_form").submit(); 
  }
}

// This function replaces all user text entries in the form with empty strings
//   and returns the asterisks for the error text.
//   also returns focus to the first text box.
function clearList()
{
  //$("#email_address1").val("").next().text("*");
  //$("#email_address2").val("").next().text("*");
  $("#first_name").val("").next().text("*");
  $("#last_name").val("").next().text("*");
  $("#subject").val("").next().text("*");
  $("#subject").focus();
}

/*When the document is loaded, sign up for button click events and
 * focus on the first email address field of the form.
 */
$(document).ready(function() {
  //Sets up event listener for the Join List button click.
  $("#validate").click(joinList);
  //Sets up event listener for the Clear List button click.
  $("#clear_entries").click(clearList);
  //Sets up event listeners for each form input being double clicked.
  //$("#email_address1").dblclick(function() {$(this).val("").next().text("*");});
  //$("#email_address2").dblclick(function() {$(this).val("").next().text("*");});
  $("#first_name").dblclick(function() {$(this).val("").next().text("*");});
  //Sets the focus to first email address.  
  $("#subject").focus();
});

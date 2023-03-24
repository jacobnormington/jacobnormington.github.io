/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    const btn = document.getElementById("encrypt-it");
    btn.addEventListener("click", () => encrypt());
  }

  /**
   * Computes and sends to #result an encrypted version of the input, 
   * using a simple shift cipher, adding 1 to each letter (i.e. a -> b, 
   * f -> g), but with z -> a. 
   */
  function encrypt ()
  {
    let txt = document.getElementById("input-text").value;
    txt = txt.toLowerCase();
    let ciphert = ""
    for (let i = 0; i < txt.length; i++) 
    {
      if (txt[i] < 'a' || txt[i] > 'z') 
      {
        ciphert += txt[i];
      } else if (txt[i] == 'z') 
      {
        ciphert += 'a';
      } else 
      {
        let letterCode = txt.charCodeAt(i);
        ciphert += String.fromCharCode(letterCode + 1);
      }
    }

    document.getElementById("result").innerHTML = ciphert;
  }

})();

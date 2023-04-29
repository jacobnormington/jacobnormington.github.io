/**
 * A webpage for fetching cute pet photos. Puppies (the best) or
 * kitties will be populated on the page after the user selects their desired
 * pet type.
 */
"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * Declare event handlers for the radio buttons
   */
  function init() {
    id("kitty").addEventListener("change", makeRequest);
    id("puppy").addEventListener("change", makeRequest);
  }

  async function makeRequest() {
    let value = this.value;
    try
    {
      let res = fetch("https://courses.cs.washington.edu/courses/cse154/webservices/pets/ajaxpets.php"
        + "?animal=" + value);
      checkStatus(res);
      res = await splitNewLines(res);
      displayPictures(res);
    }
    catch (error)
    {
      console.log(error);
    }
  }

  function splitNewLines(text) {
    return text.split("\n");
  }

  function displayPictures(imgList)
  {
    console.log(imgList);
    removePictures();

    for (let i = 0; i < imgList.length; i++)
    {
      let img = document.createElement("img");
      img.src = imgList[i];
      id("pictures").appendChild(img);
    }
  }

  function removePictures()
  {
    let oldImgList = qsa("#pictures img");
    for (let i = 0; i < oldImgList.length; i++)
    {
      oldImgList[i].remove();
    }
  }

  /* ------------------------------ Helper Functions  ------------------------------ */

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} res - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  async function checkStatus(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();

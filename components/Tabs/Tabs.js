
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    // this.element;
    this.element = element;
    // Get the custom data attribute on the Link
    // this.data;
    this.data = this.element.dataset.tab;
    //console.log(this.data);
    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);

    //console.log(this.itemElement);

    // console.log(this.itemElement);
    
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    this.tabItem = new TabItem(this.itemElement);
    
    // console.log(this.tabItem);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => this.select());

  }

  select(){
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll(".tabs-link");

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(function(tab){
      tab.classList.remove("tabs-link-selected");
      //console.log(tab.classList)
    });

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add("tabs-link-selected");
    
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }

  
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;
    this.element = element;
    //console.log(this.element);
  }

  select() {
    //console.log("made it into tab's select function");
    // Select all ".tabs-item" elements from the DOM
    // Remove the class "tabs-item-selected" from each element
    document.querySelectorAll(".tabs-item").forEach(function(element){
     

      //Line works as intended VVVVV
      //element.classList.remove("tabs-item-selected");
      //Line works as intended ^^^^^^
     
      TweenMax.to(element, .25, {x:30, opacity:0});
       setTimeout(function(){
          element.classList.remove("tabs-item-selected");
       }, 250);

    })
   
    //Line works as intended VVVVV
    //this.element.classList.add("tabs-item-selected");
    //Line Works as intended ^^^^^^

    function addClass(element){
      element.classList.add("tabs-item-selected");
      TweenMax.to(element, .25, {x: -30, opacity:1});
      console.log("waited successfully");
    }

     setTimeout( () => addClass(this.element), 250);

    // Add a class named "tabs-item-selected" to this element
    //this.element;
    // setTimeout(function{
    //   this.element.classList.add("tabs-item-selected");
    //   TweenMax.from(this.element, .25, {x: 30});
    // });  
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

links = document.querySelectorAll(".tabs-link").forEach(function(tab){
  return new TabLink(tab);
});
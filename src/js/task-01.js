const elLi= document.querySelectorAll('.item');   
console.log(`Number of categories: ${elLi.length}`);



[...elLi].map(item => { 
  
  console.log(`Category: ${item.firstElementChild.textContent}`);
  
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});

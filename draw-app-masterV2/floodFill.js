//The flood fill algorithm was taken and adapted to work with my colour palette from
//Mainly the input that the algorithm receives. This algorithm expects rgba input while our colors were usually of the form of a string. I had to take that and convert it to an array where each part of rgba has one index in the array, r = 0, g = 1, b = 2, a = 3. You get the meaning
//Lastly, I have also fixed an issue with this algorithm, the original algorithm (if you look on the below link)
//has an issue within floodFill function. When you try to fill the same area with the same color, the while loop enters an infinite loop and the page crashes.
//This happens because the algorithm doesn't have a way to mark pixels that were already visited.
//To fix the issue I added a way to keep track of pixels that have already been filled by creating a new array (see below where I marked code wrote by me!).
//https://www.reddit.com/r/p5js/comments/rhzvvr/a_flood_fill_algorithm_i_couldnt_find_any_for_p5/

let tolerance = 1; //Can adjust this as needed
  function arrayEquals(a, b) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  }
  
  
  function expandToNeighbours(queue,current){
    
    x = current.x
    y = current.y
    
    if(x-1>0){
      queue.push(createVector(x-1,y))
    }
    
    if(x+1<width){
      queue.push(createVector(x+1,y))
    } 
    
    if(y-1>0){
      queue.push(createVector(x,y-1))
    }
    
    if(y+1<height){
      queue.push(createVector(x,y+1))
    }
    
    return queue
    
  }
  
  function floodFill(seed, fillColor) {
    loadPixels();
  
    index = 4 * (width * seed.y + seed.x);
    seedColor = [
      pixels[index],
      pixels[index + 1],
      pixels[index + 2],
      pixels[index + 3],
    ];
  
    let queue = [];
    //This "visited" array will hold pixels that have already been visited
    let visited = new Array(width * height).fill(false);  //My modification of the algorithm
    queue.push(seed);
  
    while (queue.length) {
      let current = queue.shift();
      index = 4 * (width * current.y + current.x);
      //The next 2 lines of code will first check if the pixel has already been filled and then skips the iteration, if the if statement doesn't get hit, the second line of code will add the pixel to the visited array as true (visited)
      if (visited[width * current.y + current.x]) continue;   //My modification of the algorithm
      visited[width * current.y + current.x] = true;    //My modification of the algorithm
      let color = [
        pixels[index],
        pixels[index + 1],
        pixels[index + 2],
        pixels[index + 3],
      ];
      if (!arrayEquals(color, seedColor)) {
        continue;
      }
  
      for (let i = 0; i < 4; i++) {
        pixels[index+i] = fillColor[0 + i];
      }
      
      queue = expandToNeighbours(queue, current)  
    }
    
    updatePixels()
    
  }
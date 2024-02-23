//The flood fill algorithm was taken and adapted to work with my colour palette from
//Mainly I did not change the algorithm itself but the input that the algorithm receives. This algorithm expects rgba input while our colors were usually of the form of a string. I had to take that and convert it to an array where each part of rgba has one index in the array, r = 0, g = 1, b = 2, a = 3. You get the meaning
//https://www.reddit.com/r/p5js/comments/rhzvvr/a_flood_fill_algorithm_i_couldnt_find_any_for_p5/

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
    queue.push(seed);
  
    while (queue.length) {
      let current = queue.shift();
      index = 4 * (width * current.y + current.x);
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
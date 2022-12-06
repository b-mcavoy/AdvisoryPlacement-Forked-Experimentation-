 class Student {

  constructor(){
    this.cost = []; //the accuracy for a students match with an advisory (lower is better!)
    this.priorityQueue = [];

    //each Student also has 'interests' and 'needs' which we characterize numerically with arrays
    //we want the student with most similar interests, but NEED a student that matches our needs
    this.interests = [];
    // this.interests[0] = sports;
    // this.interests[1] = theatre;
    // this.interests[2] = outdoors;
    // this.interests[3] = academics;
    // this.interests[4] = redskins;
    // this.interests[5] = packers;
    // this.interests[6] = cowboys;

    this.needs = [];
    this.needs[0] = true; //race
    this.needs[1] = true; //gender
    this.needs[2] = true; //dorm

  }
   
//return and remove the lowest value of the priority queue
  PQpop(){
    if(this.priorityQueue.length > 0){
      return this.priorityQueue.pop();
    }else{
      return null;
    }
  }

   //add a value to the priority queue
  PQpush(insert){
    this.priorityQueue.push(insert);
    
    let shed;
    for(let i = this.priorityQueue.length - 1; i > 0; i -= 1 ){
      if(this.cost[this.priorityQueue[i]] > this.cost[this.priorityQueue[i-1]]){
        shed = this.priorityQueue[i];
        this.priorityQueue[i] = this.priorityQueue[i-1];
        this.priorityQueue[i-1] = shed;
      }
    }
  }

   //look at the lowest value within the priority queue
  PQpeek(){
    if(this.priorityQueue.length > 0){
      return this.priorityQueue[this.priorityQueue.length-1]
    } else{
      return null;
    }
  }
  
}
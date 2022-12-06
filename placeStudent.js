
//parse through the advisory options and place the student in its ideal advisory
//if this ends up with an advisory containing more 'matches' than their 'matchLimit' then the student in said advisory with the weakest match will be recursively called to placeStudent() but without the previous advisory in their priority queue of prefered advisories
function placeStudent(currentInd){

  
  let currentAdvisory = myStudent[currentInd].PQpeek();
  
    myAdvisory[currentAdvisory].addStudent(currentInd);
     //view requirements for advisories such as the necesary addition of a dorm student or student of color
  if(myAdvisory[currentAdvisory].matches.length > myAdvisory[currentAdvisory].matchLimit){
    if(needPOC == true){
      let greatest = 0;
      
      for(let i = 0; i < myAdvisory[currentAdvisory].matches.length; i++){
//for each student that has been matched, compare the strength of their match with the advisory to the other matches in order to remove the student with the worst match
if(myStudent[myAdvisory[currentAdvisory].matches[i]].cost[currentAdvisory] > myStudent[myAdvisory[currentAdvisory].matches[greatest]].cost[currentAdvisory]){
          greatest = i;
        }
      }
//remove student with worst match then recursively call placeStudent() to find it a new match
myStudent[myAdvisory[currentAdvisory].matches[greatest]].PQpop();
      let next = myAdvisory[currentAdvisory].removeStudent(greatest);
    
    placeStudent(next);
    }
  }
  
}
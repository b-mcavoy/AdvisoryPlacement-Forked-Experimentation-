function findTwin(let student, let need) {
  let bestFriend = 10000;
  let friend;
  for (let i = 0; i < myStudent.length; i++) {
    friend = 0;
    for (let interestsInd = 0; interestsInd < myStudent[i].interests.length; interestsInd++) {
      friend += Math.pow(myStudent[studentInd].interests[interestsInd] + myAdvisory[advisInd].interests[interestsInd], 2);
    }

    if (friend < bestFriend) {
      bestFriend = friend;
    }
    // if (myStudent[i].needs[0] == 1) {
    //   needs[0] = false;
    // } else {
    //   needs[0] = true;
    // }
    // if (myStudent[i].needs[1] == 1) {
    //   needs[1] = false;
    // } else {
    //   needs[1] = true;
    // }
    // if (myStudent[i].needs[2] == 1) {
    //   needs[2] = false;
    // } else {
    //   needs[2] = true;
    // }
  }
}
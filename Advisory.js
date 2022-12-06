 class Advisory {

   
  constructor(sports, theatre, outdoors, academics, redskins, packers, cowboys, gender, race, dorm) {

    //the 'match' array contains the student objects that belong to this advisory and it has a length of 'matchLimit'
    this.matches = [];
    this.matchLimit = 3;

    //each Advisory has 'interests' and 'needs' which we characterize numerically with arrays
    //we want the student with most similar interests, but NEED a student that matches our needs
    this.interests = [];
    this.interests[0] = sports;
    this.interests[1] = theatre;
    this.interests[2] = outdoors;
    this.interests[3] = academics;
    this.interests[4] = redskins;
    this.interests[5] = packers;
    this.interests[6] = cowboys;

    this.needs = [];
    this.needs[0] = gender;
    this.needs[1] = race;
    this.needs[2] = dorm;
  }

   //add student to advisory match array
  addStudent(student) {
    this.matches.push(student);
  }
   
//remove student from advisory match array, given students index in match array
  removeStudent(student) {
    let shed = this.matches[student];

    this.matches[student] = this.matches[this.matches.length - 1];

    this.matches[this.matches.length - 1] = shed;
    return this.matches.pop();

  }
}
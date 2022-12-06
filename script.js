//start by reaching out to html and getting the .csv data uploaded
let data;
const myForm = document.getElementById("myForm");
const csvFile = document.getElementById("csvFile");

//once the .csv is loaded convert the information in the .csv to a 2d array so we cna process the information more easily
myForm.addEventListener("submit", function(e) {
  document.getElementById("output").innerHTML = "submitted";
  e.preventDefault();
  const input = csvFile.files[0];
  const reader = new FileReader();
  document.getElementById("output").innerHTML = "loading...";
  reader.onload = function() {
    document.getElementById("output").innerHTML = "loaded";
    const text = e.target.result;
    data = csvToArray(text);
    document.write(JSON.stringify(data));
    console.log(data, "dataa");


    //reader.readAsText(input);

    //creating advisory and student arrays
    let myAdvisory = [];
    let myStudent = [];

    let needPOC = true;
    let needGender = true;
    let needDorm = true;

    function setup() {
      for (let i = 0; i < 30; i++) {
        myAdvisory[i] = new Advisory(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random());

      }

      for (let i = 0; i < data.length; i++) {
        myStudent[i] = new Student();
        for (let j = 0; i < data[i].length; j++) {
          myStudent[i].interests[j] = data[i][j];
        }
      }


      //lets get a list of the "cost" (or distance) from each student to each advisory

      for (let studentInd = 0; studentInd < myStudent.length; studentInd++) {

        for (let advisInd = 0; advisInd < myAdvisory.length; advisInd++) {

          myStudent[studentInd].cost[advisInd] = 0;

          for (let interestsInd = 0; interestsInd < myStudent[studentInd].interests.length; interestsInd++) {


            myStudent[studentInd].cost[advisInd] += Math.pow(myStudent[studentInd].interests[interestsInd] + myAdvisory[advisInd].interests[interestsInd], 2);
          }


          myStudent[studentInd].PQpush(advisInd);

        }

      }

      //put students into advisories according to their "cost"
      for (let studentInd = 0; studentInd < myStudent.length; studentInd++) {
        placeStudent(studentInd);
      }

      console.log('Matches');
      for (let i = 0; i < myAdvisory.length; i++) {
        //formatting the display of the advisory and student matches
        document.getElementById("output").innerHTML += "Advisory " + i + ".   " + " Student Matches: " + myAdvisory[i].matches + "<br>";

      }
      //determining whether a an advisory meets the requirements or "needs" for diversity
      for (let i = 0; i < 30; i++) {
        myStudent[i] = new Student(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.round(Math.random()), Math.round(Math.random()), Math.round(Math.random()));
        if (myStudent[i].needs[0] == 1) {
          needPOC = false;
        } else {
          needPOC = true;
        }
        if (myStudent[i].needs[1] == 1) {
          needGender = false;
        } else {
          needGender = true;
        }
        if (myStudent[i].needs[2] == 1) {
          needDorm = false;
        } else {
          needDorm = true;
        }
      }
    }

    setup();
  };
  console.log("boofedd");
});
// *********************************************
// ******* exercise: array of arrays ***********
// *********************************************

const schoolSystem = {
  schools: [
    {
      name: 'Fake School 1',
      classRooms: [
        {
          teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
          students: [
            { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
            { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
            { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
            { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
            { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
          ]
        },
        {
          teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
          students: [
            { firstName: 'Manley', lastName: 'Doyle', age: 18 },
            { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
            { firstName: 'Sid', lastName: 'Rohan', age: 30 },
            { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
            { firstName: 'Gerald', lastName: "O'Keefe", age: 26 }
          ]
        }
      ]
    },
    {
      name: 'Fake School 2',
      classRooms: [
        {
          teacher: { firstName: 'Lucas', lastName: 'Schroeder', age: 29 },
          students: [
            { firstName: 'Giuseppe', lastName: 'Hegmann', age: 24 },
            { firstName: 'Jennyfer', lastName: 'Hane', age: 19 },
            { firstName: 'Mikayla', lastName: 'Braun', age: 23 },
            { firstName: 'Rickie', lastName: 'White', age: 22 },
            { firstName: 'Rose', lastName: 'Collins', age: 30 }
          ]
        },
        {
          teacher: { firstName: 'Green', lastName: 'Sauer', age: 25 },
          students: [
            { firstName: 'Melany', lastName: 'Welch', age: 25 },
            { firstName: 'Paxton', lastName: 'Corkery', age: 22 },
            { firstName: 'Nellie', lastName: 'Hauck', age: 26 },
            { firstName: 'Eunice', lastName: 'Hirthe', age: 26 },
            { firstName: 'Aylin', lastName: 'Barrows', age: 26 }
          ]
        }
      ]
    },
    {
      name: 'Fake School 3',
      classRooms: [
        {
          teacher: { firstName: 'Nikko', lastName: 'Crist', age: 42 },
          students: [
            { firstName: 'Christop', lastName: 'Hahn', age: 26 },
            { firstName: 'Newell', lastName: 'Kemmer', age: 27 },
            { firstName: 'Katheryn', lastName: 'Heller', age: 26 },
            { firstName: 'Saul', lastName: 'Heathcote', age: 20 },
            { firstName: 'Maudie', lastName: 'Haley', age: 30 }
          ]
        },
        {
          teacher: { firstName: 'Nathanael', lastName: 'Hansson', age: 50 },
          students: [
            { firstName: 'Jensen', lastName: 'Reichel', age: 21 },
            { firstName: 'Lois', lastName: 'Kulas', age: 28 },
            { firstName: 'Caterina', lastName: 'Wolff', age: 28 },
            { firstName: 'Dahlia', lastName: 'Collier', age: 24 },
            { firstName: 'Linwood', lastName: 'Langosh', age: 26 }
          ]
        }
      ]
    }
  ]
};

// 1: Retrieve the “Fake School 3” object
console.log(schoolSystem.schools[2]);

// 2: Retrieve the teacher with the first name of “Nathanael”
console.log(schoolSystem.schools[2].classRooms[1].teacher);

// 3: Retrieve the student with the first name of “Saul”
console.log(schoolSystem.schools[2].classRooms[0].students[3]);

// 4: Add a student with the name of Lucille D. Lozano to Fake School 2, in the first classroom.
schoolSystem.schools[1].classRooms[0].students.push({ firstName: 'Lucille', lastName: 'D. Lozano', age: 34 });
console.log(schoolSystem.schools[1].classRooms[0].students);

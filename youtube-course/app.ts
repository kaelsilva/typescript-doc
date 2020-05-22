enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'Kael',
  age: 9,
  hobbies: ['Soccer', 'Videogame'],
  role: Role.ADMIN
};

if (person.role === Role.ADMIN){
  console.log('ADMIN!');
}
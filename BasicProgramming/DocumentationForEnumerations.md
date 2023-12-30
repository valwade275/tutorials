# Exercise 13: Documenting Enumerations

For this exercise, you will document an enumeration in the form of a JavaScript constant object. 
Let’s say we were creating a Learning Management System. 
There is an enumeration to cover the roles that users can be in: 
student, teacher, assistant teacher, and administrator. 

const Role = {
   Student: 0,
   AssistTeacher: 1,
   Teacher: 2,
   Admin: 3
};

## Documentation Table
| Property Name     | Description     | Value     |
| -------- | --------------- | -------- |
| **Student**   | Student. Can sign up for courses and submit assignments.  | 0 |
| **AssistTeacher** | Assistant teacher. Can grade assignments. | 1 |
| **Teacher**   | Teacher. Can grade assignments and submit final grades.   | 2 |
| **Admin** | Administrator. Has permissions for all actions, including creating and deleting courses.  | 3 |


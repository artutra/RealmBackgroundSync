export default class Discipline {

  static schema = {
    name: 'Discipline',
    primaryKey: 'id',
    // properties: {
    //   id: {type: 'string'},
    //   name: {type: 'string'},
    //   lessons: {type: 'list', objectType: 'Lesson'},
    //   createdAt: {type: 'date'}
    // }
    properties: {
      id: 'string',
      name: 'string',
      lessons: {type: 'list', objectType: 'Lesson'},
      course: {type: 'Course'}
    }
  }
}

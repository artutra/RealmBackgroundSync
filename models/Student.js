export default class Student {

  static schema = {
    name: 'Student',
    primaryKey: 'id',
    properties: {
      id: 'string',
      courses: {type: 'list', objectType: 'Course'},
      disciplines: {type: 'list', objectType: 'Discipline'},
    }
  }
}

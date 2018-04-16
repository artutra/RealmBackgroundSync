export default class Course {

  static schema = {
    name: 'Course',
    primaryKey: 'id',
    properties: {
      id: 'string',
      name: 'string',
      // disciplines: {type: 'list', objectType: 'Discipline'},
      // createdAt: {type: 'date'}
    }
  }
}

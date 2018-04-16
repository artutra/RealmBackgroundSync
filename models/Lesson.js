export default class Lesson {

  static schema = {
    name: 'Lesson',
    primaryKey: 'id',
    // properties: {
    //   id: {type: 'string'},
    //   topics: {type: 'list', objectType: 'Topic'},
    //   relatedDisciplines: {type: 'list', objectType: 'Discipline'},
    //   learningObjects: {type: 'list', objectType: 'LearningObject'},
    //   createdAt: {type: 'date'}
    // }
    properties: {
      id: 'string',
      // topics: {type: 'list', objectType: 'Topic'},
      relatedDisciplines: { type: 'list', objectType: 'Discipline' },
      learningObjects: { type: 'list', objectType: 'LearningObject' }
    }
  }
}
export class Topic {

  static schema = {
    name: 'Topic',
    primaryKey: 'id',
    properties: {
      id: {type: 'string'},
      name: {type: 'string'}
    }
  }
}

export default class LearningObject {

  static schema = {
    name: 'LearningObject',
    primaryKey: 'id',
    // properties: {
    //   id: 'string',
    //   page: 'int',
    //   createdAt: 'date',
    //   quiz: {type: 'Quiz'},
    //   video: {type: 'Video'},
    // }
    properties: {
      id: 'string',
      page: 'int',
    }
  };
}

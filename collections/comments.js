Comments = new Mongo.Collection('comments');

console.log('comment collection object created! length=' + Comments.find().count());

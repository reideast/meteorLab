Comments = new Mongo.Collection('Comments');

console.log('comment collection object created! length=' + Comments.find().count());

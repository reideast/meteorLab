Template.comments.helpers({
    comments() {
        console.log("I'm helpful!");
        console.log(Comments);
        console.log(Comments.find({}));
        return Comments.find();
    }
});

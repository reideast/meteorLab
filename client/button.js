import { ReactiveVar } from 'meteor/reactive-var';

// doesn't seem to be necessary?? why did the "meteor create" put it there in the first place?
// import './button.html';

Template.button.onCreated(function () {
    this.countIncrements = new ReactiveVar(0);
    this.countDecrements = new ReactiveVar(10);
});

Template.button.helpers({
    incCount() {
        return Template.instance().countIncrements.get();
    },
    decCount() {
        return Template.instance().countDecrements.get();
    },
});

Template.button.events({
    'click .increment'(event, instance) {
        // increment the counter when button is clicked
        instance.countIncrements.set(instance.countIncrements.get() + 1);
    },
    'click .decrement'(event, instance) {
        instance.countDecrements.set(instance.countDecrements.get() - 1);
    },
    'click .incDec'(event, instance) {
        instance.countIncrements.set(instance.countIncrements.get() + 1);
        instance.countDecrements.set(instance.countDecrements.get() - 1);
    },
});

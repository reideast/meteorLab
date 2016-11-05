import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './button.html';

Template.button.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counterVar = new ReactiveVar(0);
});

Template.button.helpers({
  counter() {
    return Template.instance().counterVar.get();
  },
});

Template.button.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counterVar.set(instance.counterVar.get() + 1);
  },
});

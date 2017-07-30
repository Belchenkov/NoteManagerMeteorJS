import { Template } from 'meteor/templating';
import { Notes } from '../lib/collections';

import './main.html';

Template.body.helpers({
    notes() {
        return Notes.find({});
    }
});

Template.add.events({
    'submit .add-form': function() {
        event.preventDefault();

        // Get input value
        const target = event.target;
        const text = target.text.value;

        //console.log(text);

        // Insert Note into collection
        Notes.insert({
            text,
            createdAt: new Date()
        });

        target.text.value = '';
        $('#addModal').modal('close');


        return false;
    }
});

Template.note.events({
    'click .delete-note': function() {
        Notes.remove(this._id);

        return false;
    }
});
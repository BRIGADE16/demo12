/**
 * Created by bader on 01/03/2016.
 */
Template.annonce.helpers({
  annonce: function(){

    console.log(Annonce.findOne());
    return Annonce.findOne();
  }
});

Template.updateAnnonce.helpers({
  an: function(){
    return Annonce.findOne();
  }
});

Template.updateAnnonce.events({
  'click #save': function(){
    var an = {};
    var _id = Annonce.findOne()._id;
    an.titre = $('#titre').val();
    an.description = $('#desc').val();
    an.prix = Number($('#prix').val());
    Meteor.call('update', _id, an);
  }
});

/**
 * Created by bader on 01/03/2016.
 */
Template.createAnnonce.events({
  'click #save': function(){
    annonce = {};
    annonce.titre = $('#titre').val();
    annonce.description = $('#desc').val();
    annonce.prix = Number($('#prix').val());
    Meteor.call('create', annonce);
  }
});

/**
 * Created by bader on 01/03/2016.
 */
Template.listannonce.helpers({
  list: function(){
    return Annonce.find().fetch();
  }
});
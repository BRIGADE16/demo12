/**
 * Created by bader on 01/03/2016.
 */
Meteor.publish('list', function(prix){
  return Annonce.find({prix: prix});
});

Meteor.publish('annonce', function(id){
  return Annonce.find({_id: id});
});
/**
 * Created by bader on 01/03/2016.
 */
Router.route('createAnnonce');
Router.route('listannonce', {
  path: 'listannonce',
  waitOn: function(){
    return Meteor.subscribe('list', 1);
  }
});
Router.route('annonce', {
  path: 'annonce/:id',
  waitOn: function(){
    return Meteor.subscribe('annonce', this.params.id);
  }
});
Router.route('updateAnnonce', {
  path: 'update/:id',
  waitOn: function(){
    return Meteor.subscribe('annonce', this.params.id);
  }
});
/**
 * Created by bader on 01/03/2016.
 */

var schema = {};
schema.voiture= {
    userId: {
      type: String,
    },
    titre: {
      type: String,
    },
    description:{
      type: String
    },
    prix: {
      type: Number,
      min: 4
    },
    categorie:{
      type: String
    }
  };

Meteor.methods({
    create: function(an){
      an.userId = Meteor.userId();
      an.categorie = "immobilier";
      check(an.categorie, String);
      var cxt = new SimpleSchema(schema[an.categorie]).newContext();
      var c = cxt.invalidKeys();
      Annonce.insert(an);
    },
    update: function(_id, an){
      check(an.titre, String);
      check(an.description, String);
      check(an.prix, Number);
      Annonce.update(_id, {
        $set: {
          titre: an.titre,
          description: an.description,
          prix: an.prix,
          vehicule: 'kjfbjknblk'
        }
      })
    }
});
import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';


Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('links', function() {
    return Links.find({});

  });
});

// Executed whenever user visit with a route like:
// localhost:3000/abcd
function onRoute(req, res, next){
  // take a token from the url and try to match with links collection
  const link = Links.findOne({ token: req.params.token });


  if (link) {
    // atualizar o contador no banco de dados
    Links.update(link, { $inc: { clicks: 1 }});
    // if we find the link object, redirect the user to the longer url
    res.writeHead(307, { 'Location': link.url });
    res.end(); // finaliza e mostra o resultado pra o user
  } else {
    // if we didn't find a link object, send the user to normal react app
    next(); // procura o proximo middleware, eventualmente a react app

  }


}

// localhost:3000/ -> no match!
// localhost:3000/books/harry_potter -> no match
// localhost:3000/dream -> Great, match!!!!

const middleware = ConnectRoute(function(router) {
  router.get('/:token', onRoute);

});

WebApp.connectHandlers.use(middleware);

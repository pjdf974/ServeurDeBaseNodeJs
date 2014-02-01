ServeurDeBaseNodeJs
===================

Serveur de base en node.js


Squelette d'un serveur hyper simplifié en node.js.

3 méthodes utilisées dans les formulaires:

1°) 'get' : méthode classique gérée par node.js avec url.parse(..., true)
2°) 'post' : gérée par node.js avec request.on('data', data) avec limitation de la longueur des données reçues à 1000 caractères
3°) 'XMLHttpRequest : méthode gérée en javascript, envoi après construction de la chaîne de caractère du type : 
'/methode?nomDuChamp1=valeurDuChamp1&nomDuChamp2=valeurDuChamp2 ...etc...'
gérée par node.js avec url.parse(..., true) comme pour 'get'




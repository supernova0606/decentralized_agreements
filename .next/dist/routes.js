'use strict';

var routes = require('next-routes')();

routes.add('/brds/new', '/brds/new').add('/brds/:address', '/brds/show').add('/brds/:address/requests', '/brds/requests/index').add('/brds/:address/requests/new', '/brds/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNHLEFBREgsSUFDTyxBQURQLGFBQ29CLEFBRHBCLGFBRUcsQUFGSCxJQUVPLEFBRlAsa0JBRXlCLEFBRnpCLGNBR0csQUFISCxJQUdPLEFBSFAsMkJBR2tDLEFBSGxDLHdCQUlHLEFBSkgsSUFJTyxBQUpQLCtCQUlzQyxBQUp0Qzs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ob21lL0Rlc2t0b3AvZGVjYV9icmQifQ==
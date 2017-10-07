'use strict';

module.exports = function(Shipment) {
    Shipment.beforeRemote('**', function (ctx, instance, next) {
        console.log(ctx.methodString, 'was invoked remotely')
        next();
      })
};

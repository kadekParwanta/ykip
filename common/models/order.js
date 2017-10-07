'use strict';

module.exports = function(Order) {

    // Remote Hooks
    Order.beforeRemote('**', function (ctx, instance, next) {
        console.log(ctx.methodString, 'was invoked remotely')
        next();
    })

    //Operation Hooks
    Order.observe('after save', function(ctx, next) {
        console.log('isNewInstance?', ctx.isNewInstance !== undefined);
        next();
      });
};

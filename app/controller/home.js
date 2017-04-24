'use strict';

module.exports = app => {
    class HomeController extends app.Controller {
        * index() {
            const data = {user: 'egg'}
            this.ctx.body = yield this.ctx.renderString('hi, <%= user %>', data);
        }
    }
    return HomeController;
};

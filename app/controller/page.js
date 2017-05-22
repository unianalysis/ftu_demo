'use strict';

module.exports = app => {
    class MenuController extends app.Controller {
        * index() {
            const data = {
                menu: {
                    name: 'index'
                }
            };
            yield this.ctx.render('index.ejs', data);
        }
        * upload() {
            const data = {
                menu: {
                    name: 'upload'
                },
                uploaded: false
            };
            yield this.ctx.render('upload.ejs', data);
        }
        * stats() {
            const data = {
                menu: {
                    name: 'stats'
                }
            };
            yield this.ctx.render('stats.ejs', data);
        }
        * filtration() {
            const data = {
                menu: {
                    name: 'filtration'
                }
            };
            yield this.ctx.render('filtration.ejs', data);
        }
        * analysis() {
            const data = {
                menu: {
                    name: 'analysis'
                }
            };
            yield this.ctx.render('analysis.ejs', data);
        }
    }
    return MenuController;
};

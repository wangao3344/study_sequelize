'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    //后台管理系统
    require('./router/admin/user')(app);
    //移动端接口
    require('./router/default/api')(app);
};

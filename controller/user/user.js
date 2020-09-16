//DOTO 项目二级路由
let express = require("express");
//导入数据校验中间件
let expressJoi = require('@escook/express-joi');
// 引入controller的逻辑处理函数
let userService = require("../../service/user/user");
//导入校验规则对象
let {user_schema} = require("../../shema/user/user");
let Router = express.Router();

Router.post("/getAllUserInfo",userService.getAllUserInfo);
Router.post("/getUserInfo",expressJoi(user_schema),userService.getUserInfo);
Router.post("/resetPWD",expressJoi(user_schema),userService.resetPWD);
Router.post("/operationState",expressJoi(user_schema),userService.operationState);
Router.post("/getUserByName",expressJoi(user_schema),userService.getUserByName);

module.exports =Router;

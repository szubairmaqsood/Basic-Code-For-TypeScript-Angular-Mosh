"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_1 = require("./like");
var like = new like_1.Likes(10, true);
like.onClick();
console.log("The selected Count is " + like.likeCount + " and Selected state is " + like.isSelected);

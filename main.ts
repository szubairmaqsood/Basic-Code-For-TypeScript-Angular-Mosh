import { Likes } from "./like";

let like = new Likes(10,true);
like.onClick();
console.log(`The selected Count is ${like.likeCount} and Selected state is ${like.isSelected}`);
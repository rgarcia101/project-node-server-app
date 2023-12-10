// Source: https://github.com/jannunzi/kanbas-node-server-app-cs5610-fa23/blob/a6/follows/dao.js

import model from "./model.js";

export const userFollowsUser = (follower, followed) =>
    model.create({ follower, followed });
export const userUnfollowsUser = (follower, followed) =>
    model.deleteOne({ follower, followed });

// POPULATE IS THE - RESPOND WITH THE DOCUMENT
export const findFollowersOfUser = (followed) =>
    model.find({ followed }).populate("follower");

// POPULATE IS THE JOIN - RESPOND WITH THE DOCUMENT
export const findFollowedUsersByUser = (follower) =>
    model.find({ follower }).populate("followed");
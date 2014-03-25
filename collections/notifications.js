Notifications = new Meteor.Collection('Notifications');

Notifications.allow({
	update: ownsDocument
});

createCommentNotification = function(comment) {
	var post = Posts.findOne(comment.postId);
	if (comment.userId !== post.userId) {
		Notifications.insert({
			userId: post.userId,
			postId: post._id,
			commentId: comment._id,
			commenterName: comment.author,
			read: false
		});
	};
};
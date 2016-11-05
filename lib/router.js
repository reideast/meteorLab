FlowRouter.route('/', {
    name: 'index',
    action(params, queryParams) {
        // console.log("route=" + FlowRouter.getRouteName());
        BlazeLayout.render('App_Body', {main: 'index'});
    }
});

FlowRouter.route('/index*', {
    action(params, queryParams) {
        FlowRouter.redirect('/');
    }
});

FlowRouter.route('/button*', {
    name: 'button',
    action() {
        BlazeLayout.render('App_Body', {main: 'button'});
    }
});

FlowRouter.route('/about*', {
    name: 'about',
    action(params, queryParams) {
        BlazeLayout.render('App_Body', {main: 'about'});
    }
});

FlowRouter.route('/findUs*', {
    name: 'findUs',
    action(params, queryParams) {
        BlazeLayout.render('App_Body', {main: 'findUs'});
    }
});

FlowRouter.route('/contact*', {
    name: 'contact',
    action(params, queryParams) {
        BlazeLayout.render('App_Body', {main: 'contact'});
    }
});

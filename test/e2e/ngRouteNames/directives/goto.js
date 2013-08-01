'use strict';

describe('Directive(ngRouteNames): goto', function () {

	// Initialize the objects we are testing
	beforeEach(function() {
		browser().navigateTo('/');
	});

	it('should add class names based on the route name', function () {
		expect(element('a.home').count()).toEqual(1);
		expect(element('.view3').count()).toEqual(2);
	});

	it('should set an active class when the current route matches the link', function () {
		expect(element('a.home').attr('class')).toMatch(/is-active/);
	});

	it('should inject the href attribute', function () {
		expect(element('a.home').attr('href')).toEqual('/');
		expect(element('a.view2').attr('href')).toEqual('/view2');
	});

	it('should not set href attribute for non-link elements', function () {
		expect(element('div.view3').attr('href')).toBe(undefined);
	});

	it('should update the active class when the route changes', function () {
		// Ensure classes are valid
		expect(element('a.home').attr('class')).toMatch(/is-active/);
		expect(element('a.view3').attr('class')).not().toMatch(/is-active/);
		expect(element('a.view4').attr('class')).not().toMatch(/is-active/);

		// Change the route
		element('a.view3').click();
		expect(browser().location().path()).toEqual('/steve/view3');


		// Check if classes updated
		expect(element('a.home').attr('class')).not().toMatch(/is-active/);
		expect(element('a.view3').attr('class')).toMatch(/is-active/);
		expect(element('a.view4').attr('class')).not().toMatch(/is-active/);

		// Change the route
		element('a.view4').click();
		expect(browser().location().path()).toEqual('/steve/view4');

		// Check if classes updated
		expect(element('a.home').attr('class')).not().toMatch(/is-active/);
		expect(element('a.view3').attr('class')).not().toMatch(/is-active/);
		expect(element('a.view4').attr('class')).toMatch(/is-active/);

		// Change the route
		element('a.home').click();
		expect(browser().location().path()).toEqual('/');

		// Ensure classes are valid
		expect(element('a.home').attr('class')).toMatch(/is-active/);
		expect(element('a.view3').attr('class')).not().toMatch(/is-active/);
		expect(element('a.view4').attr('class')).not().toMatch(/is-active/);
	});


	it('should update the href when the route changes', function () {
		// Ensure routes are valid
		expect(element('a.view3').attr('href')).toEqual('/steve/view3');
		expect(element('a.view4').attr('href')).toEqual('//view4');


		// Change the route
		element('a.view3').click();
		expect(browser().location().path()).toEqual('/steve/view3');


		// Check the routes updated
		expect(element('a.view3').attr('href')).toEqual('/steve/view3');
		expect(element('a.view4').attr('href')).toEqual('/steve/view4');


		// Change the route
		element('a.view4').click();
		expect(browser().location().path()).toEqual('/steve/view4');


		// Check the routes are the same
		expect(element('a.view3').attr('href')).toEqual('/steve/view3');
		expect(element('a.view4').attr('href')).toEqual('/steve/view4');


		// Change the route
		element('a.home').click();
		expect(browser().location().path()).toEqual('/');


		// Ensure routes are valid
		expect(element('a.view3').attr('href')).toEqual('/steve/view3');
		expect(element('a.view4').attr('href')).toEqual('//view4');
	});

});

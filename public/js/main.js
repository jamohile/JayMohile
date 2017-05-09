/**
 * http://usejsdoc.org/
 */
var currentPage = 'portfolio'; // currently open page
var currentPortfolioItem = ''; // the currently viewed portfolio item, or ''
// for nothing

$(document).ready(init);
function init() {
	$('.portfolio_item').click(function() {
		portfolio_item_click(this);
	});
	$('.portfolio_item').mouseenter(function() {
		portfolio_item_mouseenter(this.id);
	});
	$('.portfolio_item').mouseleave(function() {
		portfolio_item_mouseleave(this.id);
	});
	$('.button').mouseenter(function() {
		$('#' + this.id).addClass('button_clicked');
	});
	$('.button').mouseleave(function() {
		if (currentPage != this.id) {
			$('#' + this.id).removeClass('button_clicked');
		}
	});
	$('.button').click(function() {
		button_click(this);
	})
}
function portfolio_item_click(item) {
	if (item.id != currentPortfolioItem) {// not already open
		if (currentPortfolioItem == '') {
			// nothing open
			open_portfolio_item(item.id);
			currentPortfolioItem = item.id;
		} else {
			close_portfolio_item(currentPortfolioItem);
			currentPortfolioItem = item.id;
			open_portfolio_item(currentPortfolioItem);
		}

	} else {// already open item was clicked
		close_portfolio_item(item.id);
		currentPortfolioItem = '';
	}
}
function open_portfolio_item(item) {
	$('#' + item).animate({ // animate new size for
		// container
		height : '516px',
		width : '336px'
	});
	$('#' + item).find('.portfolio_item_image').animate({
		width : '152px',
		marginLeft : '92px',
		marginRight : '92px'
	});
	$('#' + item).find('.portfolio_item_information').fadeIn(1200);
}
function close_portfolio_item(item) {
	$('#' + item).find('.portfolio_item_information').fadeOut(200);
	$('#' + item).animate({ // animate new proportion for container
		height : '168px',
		width : '168px'
	});
	$('#' + item).find('.portfolio_item_image').animate({
		width : '120px',
		marginLeft : '24px',
		marginRight : '24px',
	});
	portfolio_item_mouseleave(item, true);
}
function portfolio_item_mouseenter(item) {
	if (item != currentPortfolioItem) { // not selected
		$('#' + item).animate({

		});
		$('#' + item).find('.portfolio_item_name').animate({
			opacity : '1',
			height : '32px'
		}, 200);
		$('#' + item).find('.portfolio_item_image').animate({
			marginTop : '0px'
		}, 200);
	} else {

	}
}
function portfolio_item_mouseleave(item, override) {
	if (item != currentPortfolioItem || override) { // not selected
		$('#' + item).animate({

		});
		$('#' + item).find('.portfolio_item_name').animate({
			opacity : '0',
			height : '0px'
		}, 200);
		$('#' + item).find('.portfolio_item_image').animate({
			marginTop : '24px'
		}, 200);
	} else {

	}
}
function button_click(item) {
	$('#' + currentPage).removeClass('button_clicked');
	$('.' + currentPage).fadeOut(500, function() {
		currentPage = item.id;
		$('.' + currentPage).fadeIn(500);
		$('#' + currentPage).addClass('button_clicked');
		$('.page_banner').text(currentPage);
	});

}
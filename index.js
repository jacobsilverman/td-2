/* take a student list as an argument */
function pages(list) {
  // copy the list of students
	var originalList = list.slice();
  // prepare an empty array
	var pagesArray = [];
  // loop through all students in our student list argument
	while (originalList.length) {
    // nest arrays of 10 students
		pagesArray.push(originalList.splice(0,10));
	}
  // return the nested array
	return pagesArray;
}

/* arguments here for page number and student list */
function showPage(pageNumber, pageList) {
  // first hide all students on the page
  $(".student-list li").hide();
  // Then loop through all students in our student list argument
  $.each(pageList, function(index, page){
    // if student should be on this page number
      if (pageNumber === index) {
        // show the student
        $.each(page, function(i, listItem){
          $(listItem).fadeIn(200);
        });
      }
  });
}

/* take a student list as an argument */
function appendPageLinks(pageList) {
  // append our new page link section to the site
	$('.page').append(pageDiv);
  // determine how many pages for this student list
	var numPages = pageList.length;
  // “for” every page
	for (var i = 1; i <= numPages; i++) {
    // add a page link to the page link section
		var buttons = '<li><a href="#">' + i + '</a></li>';
		$('.pagination ul').append(buttons);
	}
	$('.pagination ul li a').first().addClass('active');

  // define what happens when you click a link
	  $(".pagination ul li a").on("click", function(e) {
	    var pageSelection = parseInt($(this)[0].text) - 1;
      /* Use the showPage function to display the
       page for the link clicked */
	    showPage(pageSelection, pageList);
      // remove the old page link section from the site
	    $(".pagination ul li a").removeClass();
      // mark that link as “active”
	    $(this).addClass("active");
	    event.preventDefault();
	  });
}

/* no arguments */
function searchList() {
  // Obtain the value of the search input
  var searchTerm = $('#search').val().toLowerCase().trim();
  // Loop over the student list, and for each student…
  var desiredStudents = studentHtml.filter(function(i) {
    //...obtain the student’s name…
      var studentNames = $(this).find('h3').text();
      // ...and the student’s email…
    	var studentEmail = $(this).find('.email').text();
      // ...if the search value is found inside either email or name…
      if (studentNames.indexOf(searchTerm) > -1 || studentEmail.indexOf(searchTerm) > -1) {
        // ...add this student to list of “matched” student
          return true;
      }
      return false;
  });
  // If there’s no “matched” students…
  if (desiredStudents.length === 0 ) {
    // ...display a “no student’s found” message
  	$('.page-header h2').text('No student’s found');
  } else {
  	$('.page-header h2').text('STUDENTS');
  }
  var paginated_students = pages(desiredStudents);
  // remove the previous page link section
  $('.pagination').remove();
  // If over ten students were found…
  if (desiredStudents.length >= 10) {
    // ...call appendPageLinks with the matched students
    appendPageLinks(paginated_students);
  }
  // Call showPage to show first ten students of matched list
  showPage(0, paginated_students);
}


// THIS PART MEETS EXPECTATIONS
var studentHtml = $('.student-item');
// create a page link section
var pageDiv ='<div class="pagination"><ul></ul></div>';
var studentArray = pages(studentHtml);
appendPageLinks(studentArray);
showPage(0, studentArray);

// THIS PART EXCEEDS EXPECTATIONS
var searchDiv =
  '<div class="student-search">'
  + '<input id="search" placeholder="Search for students...">'
  + '<button>Search</button></div>';
$('.page-header.cf').append(searchDiv);
$('.student-search').find('button').on('click', searchList);
$('.student-search').find('input').keyup(searchList);

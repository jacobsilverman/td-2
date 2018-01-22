
function putOriginalStudentElementsIntoArray(){
  var $originalList = $('li').toArray();
  return $originalList;
}

function spliceArrayIntoPages($modifiedList){
  var $pagesArray = [];
  while ($modifiedList.length > 0) {
    $pagesArray.push($modifiedList.splice(0,10));
  }
  return $pagesArray;
}

function showPage(pageNumber, $pagesArray) {
    $('li').remove();
    $('ul').append($pagesArray[pageNumber]);
    console.log('show')
 }

function renderControls(container, currentPage, numPages, $pagesArray) {
  console.log($pagesArray)
  var pagingControls = '<div class="page-footer"> Page: <span>';
  for (var pageNumber=1; pageNumber<=numPages; pageNumber++){
    pagingControls += '<a href="#" id="idPage' + pageNumber +'">' + pageNumber + '</a>';
  }
  pagingControls += '</span> </div>';
  $(container).after(pagingControls);
}

//   pagingControls += '</span> </div>';
//
//    // for (var pageNumber = 0; pageNumber < numPages; pageNumber++) {
//    //     if (pageNumber != currentPage) {
//    //         pagingControls +=
//    //           '<a href="#"'
//    //           + ' onclick="showPage('
//    //           + pageNumber + ',' + $pagesArray
//    //           + ')">' + pageNumber + '</a>';
//    //     } else {
//    //         pagingControls += '<text>' + pageNumber + '</text>';
//    //     }
//    // }
//    //
//
// }

 // function appendPageLinks(currentPage,$pagesArray) {
    // create a page link section\
    // renderControls('ul',1,numPages,$pagesArray);
    // “for” every page
    // add a page link to the page link section
    // remove the old page link section from the site
    // append our new page link section to the site
    // define what happens when you click a link
    // Use the showPage function to display the page for the link clicked
    // mark that link as “active”
    // ATTEMPT 2
  // }

function main(){
  var pageNumber = 1;
  var $originalList = putOriginalStudentElementsIntoArray();
  var $modifiedList = $originalList;
  var $pagesArray = spliceArrayIntoPages($modifiedList)
  showPage(pageNumber, $pagesArray);
  console.log($pagesArray)
  renderControls('ul',1,$pagesArray.length,$pagesArray)

  $( "#idPage1" ).click(function() {
    showPage(0,$pagesArray);
  });
  $( "#idPage2" ).click(function() {
    showPage(1,$pagesArray);
  });
  $( "#idPage3" ).click(function() {
    showPage(2,$pagesArray);
  });
  $( "#idPage4" ).click(function() {
    showPage(3,$pagesArray);
  });
  $( "#idPage5" ).click(function() {
    showPage(4,$pagesArray);
  });
  $( "#idPage6" ).click(function() {
    showPage(5,$pagesArray);
  });
}

main();

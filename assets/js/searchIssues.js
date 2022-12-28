//get the form
let searchIssueForm = document.getElementById('search-issue-form');
// get the details of the issues of the project in json
let searchJson = document.getElementById('issue-data').getAttribute('data');
// parse the data
let searchIssues = JSON.parse(searchJson);
// get element where searched t will be shown
let searchList = document.getElementById('issues-list');

searchIssueForm.addEventListener('submit', function (e) {
  e.preventDefault();

  //create empty array where result will be stored
  let searchedIssues = [];

  //get all the form data

  let titleValue = searchIssueForm.querySelector('input[name="tie"]').value;
  let descriptionValue =
    searchIssueForm.querySelector('input[name="des"]').value;

  //add issue to searched issues array
  searchIssues.map((el) => {
    if (el.title == titleValue || el.description == descriptionValue) {
      if (!searchedIssues.includes(el)) {
        searchedIssues.push(el);
      }
    }
  });
  //create a div and add details of the searched issues
  searchList.innerHTML = '';
  for (let issue of searchedIssues) {
    let Div = document.createElement('div');
    Div.style = 'none';
    Div.innerHTML = `
      <div class="card w-100" >
    <div class="card-body" >
      <h4 class="card-title">Title : ${issue.title} </h4>
      <h5 class="card-title">Author : ${issue.author}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        Description : ${issue.description}
      </h6>
    </div>
  </div>
  `;
    searchList.appendChild(Div);
  }
});

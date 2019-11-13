export const html = `<div class="dropdown">
  <button
    class="btn btn-default dropdown-toggle"
    type="button"
    id="dropdownMenu1"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded=“true"
  >
    Dropdown
    <span class="caret"></span>
  </button>
  <ul
     class="dropdown-menu"
     aria-labelledby=“dropdownMenu1"
  >
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>
</div>`;

export const jsx = `<DropdownButton title="Title">
	 <MenuItem eventKey="1">Action</MenuItem> 
	<MenuItem eventKey="2">Another action</MenuItem> 
	<MenuItem eventKey="3" active>
		Active Item
	</MenuItem>
	 <MenuItem divider />
	 <MenuItem eventKey="4">Separated link</MenuItem>
</DropdownButton>
`;

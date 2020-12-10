//selecting items
var items = document.querySelectorAll('.list-item');
//adding event listener to buttons
function delEventHandler(item){
	const btns = item.querySelector('.buttons');
    btns.lastElementChild.addEventListener('click', ()=>{
        item.remove();
    });
}
items.forEach(item => {
    delEventHandler(item);
});

//enabling addition
function submitted(){
	const entryFieldForm = document.getElementsByTagName('form')[0]
    var formValue = entryFieldForm.getElementsByTagName('input')[0].value;
    var newItem = document.createElement('div');
    newItem.classList.add('list-item');
    newItem.innerHTML='<p>'+formValue+'</p><div class="buttons"><div><a class="fa fa-edit" href="#"></a></div><div><a class="fa fa-trash" href="#"></a></div>			</div>';
	delEventHandler(newItem);
	setFocus(newItem);
    var listItems = document.querySelector('.list-items');
    listItems.insertBefore(newItem,listItems.firstElementChild);
    entryFieldForm.reset();
	var itemAddedMessage = document.querySelector('.entry-field').nextElementSibling;
	console.log(itemAddedMessage);
	itemAddedMessage.innerText ='item added successfully!';
	setTimeout(()=>{
		itemAddedMessage.innerText ='';
	},3000);
};
var newItemForm = document.querySelector('.new-item-form');
newItemForm.addEventListener('submit',submitted);

//Enabling editing
/* items.forEach(item => {
    const pTag = item.querySelector('p');
    console.log(pTag.innerHTML);
    pTag.contentEditable="false";
});	 */
function setFocus(item){
	var editBtn = item.querySelector('.buttons');
    editBtn.firstElementChild.addEventListener('click',()=>{
		var editElem = item.firstElementChild;
		editElem.contentEditable="true";
		editElem.focus();
		});
    item.firstElementChild.addEventListener('keydown',(e)=>{
	if(e.keyCode==13){item.firstElementChild.contentEditable="false";};});
}
items.forEach(item=>{
    setFocus(item);
});
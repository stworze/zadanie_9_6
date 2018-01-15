var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
        var element = document.createElement('li');
        var itemsByTagName = document.getElementsByTagName('li');
        var listLi = itemsByTagName.length;
	element.innerHTML = 'item ' + listLi;
	console.log(listLi);
	console.log('item'+listLi);
        list.appendChild(element);
})



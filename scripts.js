var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
        var element = document.createElement('li');
        element.innerHTML = 'item' +listLi;
        var itemsByTagName = document.getElementsByTagName('li');
        var listLi = itemsByTagName.length;
	console.log(listLi);
	console.log('item'+listLi);
        list.appendChild(element);
})



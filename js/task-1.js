//Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.

const categoriesRef = document.querySelector('#categories').children;
const categoriesQuantity = categoriesRef.length
console.log(`У списку ${categoriesQuantity} категорії`);

//Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).



for (const category of categoriesRef) {
	const categoryTitleRef = category.querySelector('h2');
	const categoryTitle = categoryTitleRef.textContent;
	console.log(`Категорія: ${categoryTitle}`);

	const elementsQuantity = category.querySelector('ul').children.length;
	console.log(`Кількість елементів: ${elementsQuantity}`);
}
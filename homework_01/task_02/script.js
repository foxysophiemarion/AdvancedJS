const chefs = new Map([
	["Виктор", "Пицца"],
	["Ольга", "Суши"],
	["Дмитрий", "Десерты"]
]);

const dishes = new Map([
	["Пицца 'Маргарита'", "Виктор"],
	["Пицца 'Пепперони'", "Виктор"],
	["Суши 'Филадельфия'", "Ольга"],
	["Суши 'Калифорния'", "Ольга"],
	["Тирамису", "Дмитрий"],
	["Чизкейк", "Дмитрий"]
]);

const orders = new Map();
function addOrder(client, dish) {
	if (!orders.has(client)) {
		orders.set(client, []);
	}
	orders.get(client).push(dish);
}

const clientAlexey = { name: "Алексей" };
addOrder(clientAlexey, "Пицца 'Пепперони'");
addOrder(clientAlexey, "Тирамису");

const clientMaria = { name: "Мария" };
addOrder(clientMaria, "Суши 'Калифорния'");
addOrder(clientMaria, "Пицца 'Маргарита'");

const clientIrina = { name: "Ирина" };
addOrder(clientIrina, "Чизкейк");

for (const [client, dishes] of orders) {
	console.log(`${client.name} заказал: ${dishes.join(", ")}`);
}
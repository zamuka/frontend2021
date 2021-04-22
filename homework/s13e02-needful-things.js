// Избавляемся от ненужных вещей.
// В строке записан список вещей, раздленных запятыми. Некоторые вещи - ненужные. Их легко опознать
// по названию - их названия начинаются с "Ненужный", "Ненужное", "Ненужная", "Ненужные".
// Избавьтесь от ненужных вещей с помощью методов строки: split и startsWith и метода
// массива: filter. Соберите строку назад с помощью метода массива join.

// Чтобы избавиться от необходимости проверять варианты с заглавной и строчной буквой 'Н'
// перед сравнением просто приводите проверяемую строку к удобному для вас варианту, например toLowerCase

// Должно остаться 8 нужных вещей.
// В результате должна получиться строка со словами, разделенными запятыми. (так же, как в источнике)

const allThings = `кусок дерева, Ненужная скромность, Очки Элвиса,
  ненужные сомнения, Цветное стекло, Амулет от артрита, "Лошадиные скачки",
  Книга, Ненужное мороженое, Ваза, ненужный желудь, бейсбольная карточка`;

const needfulThings = allThings.toLowerCase().replace(/\s+/g, ' ').split(', ').filter(item => !item.startsWith('ненужн')).join(', ');

console.log(needfulThings);
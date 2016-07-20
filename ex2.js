var a = {
  Berlin: 'Germany',
  Paris: 'France',
  'New York': 'USA'
};
var b = {};
for (var property in a) {
b[a[property]] = property;
}
console.log(b);

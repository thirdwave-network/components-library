const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);
const decapitalize = text => text.charAt(0).toLowerCase() + text.slice(1);

module.exports = {
  capitalize,
  decapitalize
}

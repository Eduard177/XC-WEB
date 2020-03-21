function queryStingParamsParser(params) {
  let query = '';

  for (let key in params) {
    if (params.hasOwnProperty(key)) {
      if (params[key] == null || params[key] == '') {
        continue;
      } else {
        query +=
          '&' + encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      }
    }
  }

  return query;
}
function sortProperties(obj, isNumericSort) {
  isNumericSort = isNumericSort || false;
  var sortable = [];
  for (var key in obj)
    if (obj.hasOwnProperty(key)) sortable.push([key, obj[key]]);
  if (isNumericSort)
    sortable.sort(function(a, b) {
      return a[1] - b[1];
    });
  else
    sortable.sort(function(a, b) {
      var x = a[1].toLowerCase(),
        y = b[1].toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
  return sortable.reverse();
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { queryStingParamsParser, sortProperties, capitalizeFirstLetter };

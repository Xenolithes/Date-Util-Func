let currentDate = new Date()
currentDate = currentDate.toISOString()
let removeDashesColonsPeriods = /[-:.]/gi
currentDate = currentDate.replace(removeDashesColonsPeriods, '');
console.log(currentDate)
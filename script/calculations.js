const sortingObjsInArr = (arr, isAsc, fieldName) => {
    const compareByWordAsc = (a, b) => {
        if (a[fieldName] < b[fieldName])
            return -1;
        if (a[fieldName] > b[fieldName])
            return 1;
        return 0;
    }

    const compareByWordDesc = (a, b) => {
        if (a[fieldName] > b[fieldName])
            return -1;
        if (a[fieldName] < b[fieldName])
            return 1;
        return 0;
    }

    if (isAsc) return arr.sort(compareByWordAsc)
    else return arr.sort(compareByWordDesc)
}

const setSortingField = field => {
    if (field.id !== sortBy.fieldId)
        sortBy = {
            fieldId: field.id,
            isAsc: true
        }
    else
        sortBy.isAsc = !sortBy.isAsc

    theArray = sortingObjsInArr(theArray, sortBy.isAsc, sortBy.fieldId)
}
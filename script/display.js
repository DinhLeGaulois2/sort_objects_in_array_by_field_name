const showArr = () => {
    let result = "const <b>arr</b> = [<br/><table>"

    let keys = theArray.length > 0 ? Object.keys(theArray[0]) : []
    for (let i = 0; i < theArray.length; i++) {
        let anObj = theArray[i]
        result += "<tr><td>&nbsp;&nbsp;&nbsp;{</td>"
        for (let j = 0; j < keys.length; j++) {
            result += '<td>'
            if (sortBy.fieldId.length > 0) {
                if (sortBy.fieldId === keys[j]) {
                    if (sortBy.isAsc)
                        result += "<b class='sortASC' title='Sorting mode: ASC'>"
                    else
                        result += "<b class='sortDESC' title='Sorting mode: DESC'>"
                }
                else
                    result += "<b>"

                result += keys[j] + "</b>:</td><td align='right'>" + anObj[keys[j]]
            }
            else
                result += "<b>" + keys[j] + "</b>:</td><td align='right'>" + anObj[keys[j]]

            if (j < keys.length - 1)
                result += ",<td>"
            else
                result += "<td>"
        }

        if (i < theArray.length - 1)
            result += "},</td></tr>"
        else
            result += "}</td></tr>"
    }

    return result + "</table>]"
}

const showAsTable = () => {
    let result = ""

    if (theArray.length > 0) {
        // create the headers...
        result = '<table align="center" class="table-border">'

        result += '<tr>'
        for (let i = 0; i < fieldIdsList.length; i++) {
            if (sortBy.fieldId.length > 0 && sortBy.fieldId === fieldIdsList[i]) {
                if (sortBy.isAsc)
                    result += '<th title="Click to Sort (one way or another)" class="link sortASC" id="' + fieldIdsList[i] +
                        '">&nbsp;&nbsp;' + fieldIdsList[i] + ' <span class="link sortASC"><span class="glyphicon glyphicon-arrow-down"></span></span>&nbsp;&nbsp;</th>'
                else
                    result += '<th title="Click to Sort (one way or another)" class="link sortDESC" id="' + fieldIdsList[i] +
                        '">&nbsp;&nbsp;' + fieldIdsList[i] + ' <span class="link sortDESC"><span class="glyphicon glyphicon-arrow-up"></span></span>&nbsp;&nbsp;</th>'
            }
            else
                result += '<th title="Click to Sort (one way or another)" class="link" id="' + fieldIdsList[i] +
                    '">&nbsp;&nbsp;' + fieldIdsList[i] + '&nbsp;&nbsp;</th>'
        }
        result += '</tr>'

        // create the "sets"
        for (let i = 0; i < theArray.length; i++) {
            let aSet = theArray[i]
            if (i % 2 === 0)
                result += '<tr class="bg-gray">'
            else result += '<tr>'
            for (let j = 0; j < fieldIdsList.length; j++)
                result += '<td align="center"><b>' + aSet[fieldIdsList[j]] + '</b></td>'
            result += '</tr>'
        }
        result += '</table>'
    }

    return result
}
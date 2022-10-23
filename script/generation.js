const generation = () => {
    theArray = []
    let anObj = {}
    let isFieldIdsCreated = false
    for (let i = 0; i < customizedNbObjs; i++) {
        anObj = {}
        for (let j = 0; j < _nbFields; j++) {
            if (isFieldIdsCreated === false)
                fieldIdsList.push("field" + (j + 1))
            anObj["field" + (j + 1)] = Math.floor(Math.random() * (_maxSize + customizedNbObjs)) + 1
        }
        isFieldIdsCreated = true
        theArray.push(anObj)
    }
}
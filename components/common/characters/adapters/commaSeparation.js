const commaSeparationAdapter = (data) => data.map(item => {
    return {
        value_1: item.value_1,
        value_2: item.value_2.split(',')
    }
})
export default commaSeparationAdapter
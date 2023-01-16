const gameAdapter = (data) => {
    return data.map(item => {
        return {
            title: '',
            permalink: '',
            thumbnail: item.value_1,
            ref: [item.value_2]
        }
    })
}
export default gameAdapter
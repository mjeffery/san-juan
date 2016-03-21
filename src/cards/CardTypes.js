var types = ['card 1', 'card 2'];



module.exports = {
    card(id){
        return types[id];
    },
    id(card){
        return types.indexOf(card);
    }
};
const shorten = (title) =>{
    const titelsplited = title.split(" ");
    const newtitle = `${titelsplited[0]} ${titelsplited[1]}`
    return newtitle;
}
const isIncart = (state,id)=>{
const result = !! state.selectItems.find(item=>item.id===id)
return result;

}

const quantityCounter =(state,id)=> {
    const index = state.selectItems.findIndex(item=>item.id===id);
    if (index===-1){
        return false
    }else {
        return state.selectItems[index].quantity;
    }
}
export {shorten , isIncart ,quantityCounter} ;
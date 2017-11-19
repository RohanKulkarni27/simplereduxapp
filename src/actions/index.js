//selectbook is an action creator which needs to return an action.
export function selectBook(book){
  return{
    type:'Book_Selected',
    payload:book
  };


}

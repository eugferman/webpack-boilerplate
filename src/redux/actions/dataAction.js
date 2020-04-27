export const dataAction = (dataName) =>{
  return {
    type: 'LOAD_DATA',
    payload: dataName
  }
}

export default dataAction;
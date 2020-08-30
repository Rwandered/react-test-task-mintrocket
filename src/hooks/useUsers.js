import {useSelector} from "react-redux";


export const useUsers = () => {

  const { users } = useSelector( state => state.users)
  const { search }   = useSelector( state => state.search)

  const getAllUsers = () =>  users.users

  const getSortUsers = () => {
    // eslint-disable-next-line
    return  users.users.filter( (user) => {
      const userValue = Object.values(user)
      const isIncludes = userValue.some( (value) => (value + '').includes(search.searchString) )
      if(isIncludes) {
        return user
      }
    })
  }

  return {getAllUsers , getSortUsers}
}
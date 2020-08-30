import React, {useState} from "react";
import {useInput} from "../../hooks/useInput";
import {useDispatch} from "react-redux";
import {resetSearch, switchSearch} from "../../redux/actions/actionCreators";
import cn from 'classnames'

const Search = () => {
  const searchInput = useInput('')
  const [isCancel, setCancel] = useState(false)
  const dispatch = useDispatch()

  const runSearchHandle = (event) => {
    event.preventDefault()
    if(isCancel) {
      setCancel(state => !state)
      dispatch( resetSearch() )
      return searchInput.clear()
    }
    setCancel(state => !state)
    dispatch( switchSearch(event.target.search.value) )
  }

  return (
    <div className="search__wrapper">
      <form className="search__wrapper__form" onSubmit={ runSearchHandle }>
        <div className="input-field">
          <input
            id="search"
            type="text"
            {...searchInput.inputValue}
            name={'search'}
            required
          />
          <label htmlFor="search">Search</label>
        </div>
        <div className={'input__control'}>
          <button
            className={
              // eslint-disable-next-line
                cn('btn', { ['red']: isCancel })}
            typeof={'submit'}
          >
            { isCancel ? 'Cancel' : 'Search' }
          </button>
        </div>
      </form>
    </div>
  )
}

export default Search
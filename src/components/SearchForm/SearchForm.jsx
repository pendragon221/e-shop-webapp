import './SearchForm.css'

export const SearchForm = ({ searchText, setSearchText, onSearch }) => {

    return (
        <form className="search-form">
            <input type="text" onChange={(e) => setSearchText(e.target.value)} value={searchText} />
            <button
                className='btn-default'
                type="confirm"
                onClick={(e) => {
                    e.preventDefault()
                    onSearch(searchText)
                }}>
                Найти
            </button>
        </form>
    )
}
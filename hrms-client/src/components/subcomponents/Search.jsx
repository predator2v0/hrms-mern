
const Search = () => {
    return (
        <div className='search-component component-shadow'>
            <input type='text' placeholder='locality, pincode, location' />
            <button>
                <i className='bi bi-search'></i>
            </button>
        </div>
    );
};

export default Search;

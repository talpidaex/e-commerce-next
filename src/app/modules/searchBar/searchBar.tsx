'use client'
import { debounce } from '@/app/utils/common'
import { Search } from '@styled-icons/evil/Search'
import "./searchBar.scss"
export default function SearchBar() {

    const handleSearch = debounce((search: string) => {
        console.log(search)
    }, 1500)

    return (
        <div className='search-bar-container'>
            <form className='search-bar-form'>
                <input className='search-bar-input' placeholder="What are looking for?" onChange={(e) => handleSearch(e.target.value)} />
                <Search width={30} height={30} />
            </form>
        </div>
    )

}
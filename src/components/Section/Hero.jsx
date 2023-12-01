import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../Api/Books'
import './Hero.css'

const Hero = () => {

    const [query, setQuery] = useState("")
    const [books, setBooks] = useState([])

    useEffect(() => {
        axios
            .get(API_URL)
            .then((res) => {
                console.log(res.data)
                setBooks(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <section className='hero'>

                <div className='hero-inner'>
                    <div>
                        <h2 className='hero-title'>Your've got <span className='hero-line'>7 book</span></h2>
                        <p className='hero-text'>Your task today</p>
                    </div>

                    <div>
                        <input className='hero-input' type="text" placeholder='Enter your name' onChange={event => { setQuery(event.target.value) }} />
                        <button className='hero-buttom'>Create a book</button>
                    </div>
                </div>

                <div className='hero-box'>
                    <ul className='hero-list'>
                        {
                            books.filter((val) => {
                                if (query == '') {
                                    return val
                                } else if (val.title.toLowerCase().includes(query.toLowerCase())) {
                                    return val
                                }
                            }).map((book, key) => {
                                return (
                                    <li key={key.id} className='hero-item'>
                                        <h2 className='item-title'>{book.title.substring(0, 15)}</h2>
                                        <img className='item-image' src={book.image_url} alt="" />
                                        <p className='item-text' >{book.description.substring(0, 70)}</p>
                                        <div className='item-box'>
                                            <button className='item-del'>Delete</button>
                                            <button className='item-read'>Read Books</button>
                                        </div>
                                    </li>
                                );
                            })}










                        {/* {
                       books.map((book) =>(
                        <li key={book.id} className='hero-item'>
                            <h2 className='item-title'>{book.title.substring(0,15)}</h2>
                            <img className='item-image' src={book.image_url} alt="" />
                            <p className='item-text' >{book.description.substring(0,70)}</p>
                            <div className='item-box'>
                                <button className='item-del'>Delete</button>
                                <button className='item-read'>Read Books</button>
                            </div>
                        </li>
                       ))
                    } */}
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Hero
import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import {
    CButton,
    CCol,
    CSpinner,
} from '@coreui/react'
import { Card, Button } from 'react-bootstrap';
import axios from '../../Pages/utils/axios';
import { Link } from 'react-router-dom';
import Loader from './load/loader2.gif'
import { useAuth } from '../../Pages/hooks/useAuth';

export default function RecommendedBooks() {
    const [courses, setCourses] = useState([{ img: Loader }, { img: Loader }, { img: Loader }, { img: Loader }])
    const [loading, setLoading] = useState(true)
    const {user} = useAuth()

    useEffect(function () {
        axios.get('/recommend')
            .then((response) => {
                setCourses(response.data)
                setLoading(false)
            }
            )
    }, [])
    function lower(programme){
        let p= programme.split(' ')
        return p[0].toLowerCase()
    }
    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return <>
        <h1 className='display-6'>Most Visited Courses For {user.programme}</h1>
        <div className='relative flex items-center'>
            <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
            <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {courses.map((item) => (
                    <CCol className="w-[320px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                        <Card className="progcards" key={item.id}>
                            <Card.Img className="progcardsimg" variant="top" src={item.img} />
                            <Card.Body className="cardbody">
                                <Card.Title className="cardTitle">{item.name}</Card.Title>
                                <Link to={`/home/${lower(user.programme)}/${item.id}`} style={{ color: 'white', textDecoration: 'none' }}>{
                                    loading ? <>
                                        {/* <CButton disabled >
                                            <CSpinner component="span" size="sm" aria-hidden="true" />
                                        </CButton> */}
                                        <CButton disabled color='dark'>
                                            <CSpinner component="span" size="sm" aria-hidden="true" />
                                            Loading...
                                        </CButton>
                                    </> : <Button variant="primary" style={{ background: 'grey', borderColor: 'grey' }}
                                        className="cardsbutton">{item.name}</Button>}
                                </Link>
                            </Card.Body>
                        </Card>
                    </CCol>


                ))}
            </div>

            <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
        </div>
    </>
}
import React from 'react';
import { Container } from 'react-bootstrap'
import '../Components/Video.css'
import  Thumbnail from '../Components/Thumbnail/Thumbnail'


export default function Videos() {
    return<div>
        
        {/* <Navbar/> */}
        
        <Container>
            <div className='Contain'>
            <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
            </div>
            </div>

            <div>
                <h1 className='names'><b>Recommended</b></h1>
            </div>

            <Thumbnail/>

        </Container>

    </div>
}
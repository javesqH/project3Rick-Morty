import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

const ResidentInfo = ({url}) => {

    const [resident, setResident] = useState({})

    useEffect(() => {
        axios.get(url)
        .then(res => setResident(res.data))
    }, [])

    console.log(resident)

    return (
        <div className='content-residents'>
           
           <ul className='residents'>
               <li><img src= {resident.image} alt="" /></li>
               <br />
               <li className='res-li-name'><strong>Name:</strong> <span><i>{resident.name}</i></span></li>
               <br />
               <li className='res-li-status'><strong>Status:</strong> <span><i>{resident.status}</i></span></li>
               <br />
               <li className='res-li-origin'><strong>Origin:</strong> <span><i>{resident.origin?.name}</i></span></li>
               <br />
               <li className='res-li-episode'><strong>Episodes:</strong> <span><i>{resident.episode?.length}</i></span></li>
           </ul>
        </div>
    );
};

export default ResidentInfo;
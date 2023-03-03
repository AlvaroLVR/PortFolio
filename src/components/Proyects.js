import React from 'react'
import Cards from './Cards'
import { useEffect } from 'react'
import {collection,getDocs,getFirestore} from 'firebase/firestore'
import { useState } from 'react'
import Loading from './Loading'


export default function Proyects() {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)   

    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db,'url')
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(res => ({id: res.id,...res.data()}))))
        .then(()=>setLoading(false))
        .catch(()=> console.log('error'))
        console.log('renderizado')
    },[])

    return (
        <div className='col-md-9 bg-dark text-white container-fluid ' style={{overflowY: 'scroll'}}>

            {loading ?
                <Loading/>
            :
                <div className="row row-cols-1 row-cols-md-2 g-1 pt-4">
                    {
                        data.map(item => <Cards key={item.id} prop={item}/>)
                    }   
                </div>
            }
            
        </div>
    )
}
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRODUCT_PROGRESS } from '../redux-saga/product/action/action';

const Data = () => {
    const dispatch = useDispatch();
    const data = useSelector((state)=> state.productReducer);
    console.log(data.product);
    useEffect(() => {
      dispatch({type:GET_PRODUCT_PROGRESS});
    }, [])
    
  return (
    <div>
      <div>
        {data.product.map((e,ind)=>(
            <h1>ID is {e.id} .</h1>
        ))}
      </div>
    </div>
  )
}

export default Data

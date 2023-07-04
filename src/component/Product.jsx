import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Image, Text,Button,Stack,Heading,CardBody, CardFooter } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import Action from './Redux/action'
import SingleAction from './Redux/singleAction'
import './card.css'
const Product = () => {
   const[CartData,SetCartData] =useState([])
    const dispatch=useDispatch()
    const Data=useSelector((StoreData)=>{
      return StoreData
    })
    console.log(Data);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
            console.log(res.data);
            dispatch(Action(res.data))
        })
    },[])
    console.log(CartData);
    const AddData=(e)=>{
      SetCartData([...CartData,e])
      dispatch(SingleAction(CartData))
      console.log(CartData);
    }
  return (
    <div style={{padding:'50px'}}>
       <h1 style={{textAlign:'start',fontSize:"30px"}}><b>Product Component</b></h1>
       <p style={{textAlign:'start'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sequi dignissimos, beatae voluptatibus similique voluptas quos culpa eveniet hic suscipit nam at excepturi est ratione, numquam, accusantium vel iusto! Nesciunt ut explicabo voluptatibus autem repudiandae corrupti cupiditate accusantium beatae at distinctio eum fuga, odio deserunt dignissimos nostrum, saepe voluptatem quibusdam! Cum molestias qui, facere fugit vel in fugiat voluptatum? Nemo delectus quidem quae accusamus exercitationem praesentium a porro, tempore quo. Adipisci cupiditate eaque delectus totam, doloremque repellendus sed corrupti eius reiciendis neque iste recusandae nulla natus dolorum incidunt vero eos ducimus esse perspiciatis animi tempore et? Doloribus autem reiciendis cumque quos accusantium, earum, deserunt non quam asperiores, officiis debitis..
       </p>

       <div className='maincard'>
        {
            Data.ApiData.map((e)=>{
                return(
                    <Card
                    className='card'
                    style={{boxShadow:"0px 0px 10px gray"}}
                    key={e.id}
                   
               direction={{ base: 'column', sm: 'row' }}
               overflow='hidden'
               variant='outline'
             >
               <Image
                 objectFit='cover'
                 maxW={{ base: '90%', sm: '200px' }}
                 src={e.image}
                 alt='No Image'
               />
             
               <Stack>
                 <CardBody>
                   <Heading size='md'textAlign='start'>{e.category}</Heading>
             
                   <Text py='2' textAlign='start'>
                     {e.title}
                   </Text>
                   
                   <Text py='2' textAlign='start'>
                    <b style={{fontSize:"20px"}}>Price:</b>{e.price}
                   </Text>
                 </CardBody>
             
                 <CardFooter>
                 {/* onClick={()=>{dispatch(SingleAction(e))}} */}
                   <Button onClick={()=>AddData(e)}  variant='solid' colorScheme='blue'>
                     Add To Cart
                   </Button>
                 </CardFooter>
               </Stack>
             </Card>
                )
            })
        }
       

       </div>
    </div>
  )
}

export default Product

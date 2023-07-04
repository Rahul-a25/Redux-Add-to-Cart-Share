import React, { useState } from 'react'
import { Card, Image, Text,Button,Stack,Heading,CardBody, CardFooter } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
const Cart = () => {
  const e=useSelector((storeData)=>{
   return storeData
  })
  const [Data,SetData]=useState(e.SigleApiData)
  return (
    <>
    {
      Data.length>0 ?
      (
        Data.map((e)=>{
          return (
            <Card
                
                  style={{boxShadow:"0px 0px 10px gray",margin:"20px auto",width:"800px",height:"300px"}}
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
               <CardFooter >
                 <Button    variant='solid' colorScheme='blue'>
                   Add To Cart
                 </Button>
               </CardFooter>
             </Stack>
           </Card>
          )
        })
      ):<h1 style={{margin:"100px auto",fontSize:"50px",color:"#00a8ff",fontWeight:"600"}}>No Product</h1>
    }
        
    </>
  )
}

export default Cart

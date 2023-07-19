import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
const Data = () => {
  return (
      <>
          <TableContainer>
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th>Timestamp</Th>
        <Th >purchase id</Th>
        <Th>mail</Th>
        <Th>name</Th>
         <Th>source</Th>
          <Th>status</Th>
           <Th>select</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>35 minutes ago</Td>
        <Td>2701</Td>
        <Td >gmail.com</Td>
        <Td >saad</Td>
        <Td ></Td>
        <Td ><p style={{background:"#e69ba8",borderRadius:7,padding:"1px 7px",width:60}}>failed</p></Td>
        <Td > <p style={{background:"aqua",borderRadius:5,padding:5,width:50}}>select</p></Td>
        
      </Tr>
      <Tr>
       <Td>9 hours ago</Td>
        <Td>2701</Td>
        <Td >gmail.com</Td>
        <Td >saad</Td>
        <Td ></Td>
        <Td ><p style={{background:"#f5f57e",borderRadius:7,padding:"1px 7px",width:60}}>waiting</p></Td>
        <Td ><p style={{background:"aqua",borderRadius:5,padding:5,width:50}}>select</p></Td>
      </Tr>
      <Tr>
       <Td>10 hourse ago</Td>
        <Td>2701</Td>
        <Td >gmail.com</Td>
        <Td >saad</Td>
        <Td ></Td>
        <Td ><p style={{background:"#f5f57e",borderRadius:7,padding:"1px 7px",width:60}}>waiting</p></Td>
        <Td ><p style={{background:"aqua",borderRadius:5,padding:5,width:50}}>select</p></Td>
      </Tr>
      <Tr>
       <Td>11 hourse ago</Td>
        <Td>2701</Td>
        <Td >gmail.com</Td>
        <Td >saad</Td>
        <Td ></Td>
        <Td ><p style={{background:"#f5f57e",borderRadius:7,padding:"1px 7px",width:60}}>waiting</p></Td>
        <Td ><p style={{background:"aqua",borderRadius:5,padding:5,width:50}}>select</p></Td>
      </Tr>
      <Tr>
       <Td>11 hourse ago</Td>
        <Td>2701</Td>
        <Td >gmail.com</Td>
        <Td >saad</Td>
        <Td ></Td>
        <Td  ><p style={{background:"#80cbc4",borderRadius:7,padding:"1px 2px",width:40}}>paid</p></Td>
        <Td ><p style={{background:"aqua",borderRadius:5,padding:5,width:50}}>select</p></Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
       <Td>12 hourse ago</Td>
        <Td>2701</Td>
        <Td >gmail.com</Td>
        <Td >saad</Td>
        <Td ></Td>
        <Td ><p style={{background:"#f5f57e",borderRadius:7,padding:"1px 7px",width:60}}>waiting</p></Td>
        <Td ><p style={{background:"aqua",borderRadius:5,padding:5,width:50}}>select</p></Td>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
      </>
  )
}

export default Data;
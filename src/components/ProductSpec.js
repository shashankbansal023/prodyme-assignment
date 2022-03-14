import React from 'react'
import {Table , TableHead , TableBody , TableCell, TableRow} from '@mui/material'

const ProductSpec=()=>{

    const headers = ["Product Specifications" , "Reviews" , "FAQs"];
    const rows = ["category 1" , "category2" , "category 3"];
    const items = ["fieldValues" , "fieldValues"];

    return (
        <Table>
            <TableHead>
                <TableRow>
                        {
                            headers.map(header=>{
                                return <TableCell>{header}</TableCell>
                            })
                        }
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rows.map(row=>{
                        return (
                            <>
                                <TableCell>{row}</TableCell>
                                <TableRow>
                                    {
                                        items.map(item=>{
                                            return <TableCell>{item}</TableCell>
                                        })
                                    }
                                </TableRow>
                            </>
                        )
                    })
                }
            </TableBody>
        </Table>
    )
}

export default ProductSpec;
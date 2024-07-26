import React, { useContext } from 'react'
import { Table } from 'reactstrap'
import { AppContext } from '../../AppContext'

export default function Cart() {
    const { cart } = useContext(AppContext)


    return (
        <Table
            dark
            hover
            responsive
            striped
        >
            <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        First Name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th>
                        Username
                    </th>
                </tr>
            </thead>
            <tbody>

                {
                    cart.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">

                            </th>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                Otto
                            </td>
                            <td>
                                @mdo
                            </td>
                        </tr>
                    ))
                }



            </tbody>
        </Table>
    )
}



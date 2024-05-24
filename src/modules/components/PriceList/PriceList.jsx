import { PricePropType } from "@/redux/reducers/pricelist/price-list-reducer";
import React from "react";
import {
    Table,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
} from "reactstrap"



const PriceList = ({ prices }) => {

    //meta title
    document.title = "Прайс Лист Апрель";
    const headers = []

    if (prices && prices.length) {
        for (const key in prices[0]) {
            switch (key) {
                case 'id':
                    headers.push(key)
                    break;
                case PricePropType.COMPLECT_NUMBER:
                    headers.push(key)
                    break;
                case PricePropType.SUPPLY_NUMBER:
                    headers.push(key)
                    break;
                case PricePropType.COMPLECT_NAME:
                    headers.push(key)
                    break;
                case PricePropType.PRICE:
                    headers.push(key)
                    break;


                default:
                    break;
            }

        }
    }
    
    return (
        <React.Fragment>
            <div className="page-content">
                <div className="container-fluid">

                    <Row>
                        <Col xl={12}>
                            <Card
                                style={{ height: '98vh' }}>
                                <CardBody>
                                    <CardTitle className="h4">Прайс Лист</CardTitle>
                                    <p className="card-title-desc">
                                        Цены на систему  <code>Гарант</code> на
                                        <code> 2024 г</code>.
                                    </p>

                                    <div className="table-responsive">
                                        <Table className="table mb-0">
                                            <thead>
                                                <tr>
                                                    {headers.map(he => <th>{he}</th>)}

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {prices.map(price => (
                                                    <tr>
                                                        <th scope="row">{price.id}</th>
                                                        <td>{price[PricePropType.COMPLECT_NUMBER]}</td>
                                                        <td>{price[PricePropType.SUPPLY_NUMBER]}</td>
                                                        <td>{price[PricePropType.COMPLECT_NAME]}</td>
                                                        <td>{price[PricePropType.PRICE]}</td>
                                                    </tr>

                                                ))}

                                            </tbody>
                                        </Table>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>

                </div>
            </div>
        </React.Fragment>
    )
}





export default PriceList;
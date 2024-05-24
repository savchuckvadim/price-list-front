import { connect } from "react-redux"
import App from "./App"
import { getPrices } from "@/redux/reducers/pricelist/price-list-thunk"
import Preloader from "@/components/Common/Preloader/Preloader"
import { useEffect } from "react"


const mapStateToProps = (state) => {

    return {
        prices: state.priceList.current,
        isFetched: state.priceList.isFetched,


    }
}

const AppContainer = ({ prices, isFetched, getPrices }) => {

    useEffect(() => {

        if (!isFetched) {
            setTimeout(() => {
                getPrices()
            }, 10000);

        }
    }, [
        isFetched
    ])


    
    return !isFetched
        ? <Preloader />
        : <App prices={prices} />

}



export default connect(mapStateToProps, {
    // initial,
    // getBitrixData
    getPrices
})(AppContainer)
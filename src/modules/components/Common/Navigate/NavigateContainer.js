import { connect } from "react-redux"
import Navigate from "./Navigate"
import { back } from "@/redux/reducers/router/router-reducer"
// import { reset, resetUniversal } from "@/redux/reducers/reset/reset-reducer"
// import { clearCurrentTemplate } from "@/redux/reducers/document/document-reducer"
import { setScrollTopStatus, setTopDisplayStatus } from "@/redux/reducers/app/display-reducer"

const mapStateToProps = (state) => {
    return {
        scroll: state.display.scrollTop,


        router: state.router,
        currentSupply: state.global.currentSupply,
        currentComplectsType: state.global.currentComplectsType,
        currentRegion: state.global.currentRegion,
        currentComplect: state.currentComplect,

        isDealTable: state.deal.table.isActive,
        isSomeUpdating: state.rows.isSomeUpdating,
    }
}
export default connect(mapStateToProps, {

    // resetUniversal,
    // reset,
    back,
    // clearCurrentTemplate,
    setTopDisplayStatus,
    setScroll: setScrollTopStatus,
    // setDealTableStatus
})(Navigate)

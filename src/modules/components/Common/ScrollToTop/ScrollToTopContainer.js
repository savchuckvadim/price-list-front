import { connect } from "react-redux"
import { setScrollTopStatus } from "@/redux/reducers/app/display-reducer"
import ScrollToTop from "./ScrollToTop"

let mapStateToProps = (state) => ({
    isTopDisplayShowing: state.display.isTopDisplayShowing,


})

let ScrollToTopContainer = connect(mapStateToProps, {
    setScrollTopStatus,
})(ScrollToTop)

export default ScrollToTopContainer
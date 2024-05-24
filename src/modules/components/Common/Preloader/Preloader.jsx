// import './Preloader.css'
import Logo from '../Logo/Logo'
import Gradient from '../Backgrounds/Gradient'
import GradientContainer from '../Backgrounds/GradientContainer'

const Preloader = ({ }) => {

    return (
        <GradientContainer
            isActive={true}>
            <Logo />
        </GradientContainer>
    )
}
export default Preloader
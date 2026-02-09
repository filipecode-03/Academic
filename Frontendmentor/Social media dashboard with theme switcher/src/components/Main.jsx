import Dark from '../components/modes/Dark.jsx'
import Light from '../components/modes/Light.jsx'

function Main({ dark }) {
    return (
         <>
            {dark ? <Dark /> : <Light />}
         </>
    )
}

export default Main
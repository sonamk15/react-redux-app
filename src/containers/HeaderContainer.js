import Header from '../components/Header'
import { connect } from "react-redux";
import cardItems from '../services/reducers/reducer';

const mapStateToProps = state =>({
    data:state.cardItems
})

const mapDispatchToProps = dispatch =>({

})
export default connect(mapStateToProps, mapDispatchToProps)(Header)
import React from "react";
import {Profile} from "./Profile";
import {ProfileType, setUsersProfile} from "../../../Redux/ProfileReducer";
import axios from "axios";
import {connect} from "react-redux";
import {RootStoreType} from "../../../Redux/Redux_Store";
import {withRouter, WithRouterProps} from "./withRouter";



export type MapStateToPropsProfileType = {
   profile: ProfileType | null
}


 export type MapDispatchToPropsProfileType = {
    setUsersProfile: (profile: ProfileType) => void
}



type PropsType = MapStateToPropsProfileType & MapDispatchToPropsProfileType & WithRouterProps

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount(): void {
         let userId = this.props.params.userId.toString()
        if (!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUsersProfile(response.data)
            });
}

    render() {
        return (
                <Profile {...this.props} profile={this.props.profile}/>
    )

    }
}

let mapStateToProps = (state: RootStoreType): MapStateToPropsProfileType => ({
    profile: state.profilePage.profile
})


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile})(WithUrlDataContainerComponent);
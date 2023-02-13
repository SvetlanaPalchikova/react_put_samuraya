import React from "react";
import {Profile} from "../Profile";
import {ProfileType, setUsersProfile} from "../../../Redux/ProfileReducer";
import axios from "axios";
import {connect} from "react-redux";
import {RootStoreType} from "../../../Redux/Redux_Store";


 export type MapStateToPropsProfileType = {
   profile: ProfileType | null
}

 export type MapDispatchToPropsProfileType = {
    setUsersProfile: (profile: ProfileType | null) => void
}

class ProfileContainer extends React.Component<MapStateToPropsProfileType & MapDispatchToPropsProfileType> {
    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUsersProfile(response.data)
            });

}

    render() {
        return <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
    }
}

let mapStateToProps = (state: RootStoreType): MapStateToPropsProfileType => ({
    profile: state.profilePage.profile
})

// @ts-ignore
export default connect(mapStateToProps, {setUsersProfile})(ProfileContainer);
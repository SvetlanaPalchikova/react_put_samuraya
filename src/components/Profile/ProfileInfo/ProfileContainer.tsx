import React from "react";
import s from './Profile.module.css';
import {Profile} from "../Profile";
import {MyPostsType} from "../MyPosts/MyPostsContainer";
import {ProfilePageType, ProfileType, setUsersProfile} from "../../../Redux/ProfileReducer";
import axios from "axios";
import {connect} from "react-redux";
import {RootStoreType} from "../../../Redux/Redux_Store";


 export type MapStateToPropsProfileType = {
   profile: ProfileType | null
}

 export type MapDispatchToPropsProfileType = {
    setUsersProfile: (profile: ProfileType) => void
}


class ProfileContainer extends React.Component<MapStateToPropsProfileType & MapDispatchToPropsProfileType> {
    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUsersProfile(response.data.items)

            });

}

    render() {
        return <div className={s.content}>
                <Profile {...this.props}/>
            </div>

    }
}

let mapStateToProps = (state: RootStoreType): MapStateToPropsProfileType => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUsersProfile})(ProfileContainer);
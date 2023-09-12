import React from 'react';

import Container from '@mui/material/Container';
import * as appStyle from '/imports/materialui/styles';
import {ILayoutProps} from "/imports/typings/BoilerplateDefaultTypings";
import {Typography} from "@mui/material";
import {useUserAccount} from "/imports/hooks/useUserAccount";
import {IUserProfile} from "/imports/userprofile/api/UserProfileSch";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const {isLoggedIn, user} = useUserAccount();
    const userdef = user as IUserProfile;
    const navigate = useNavigate();

    React.useEffect(() => {
        if(!user){
            navigate('/signin');
        }
    })

    return (
    <>
        <Container>
            <Typography variant={'h1'}>Olá {userdef ? userdef.username : 'nao logado'}!</Typography>
        </Container>
    </>
);}

export default Home;

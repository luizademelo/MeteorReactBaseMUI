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
    const userprofile = user as IUserProfile;
    const navigate = useNavigate();

    React.useEffect(() => {
        if(!user){
            navigate('/signin');
        }
    }, [user]);

    return (
    <>
        <Container>
            {
                userprofile ? 
                <Typography variant={'h1'}>Olá {userprofile.username}!</Typography>
                
                : 
                <Typography>Faça login para continuar</Typography>
            }
        </Container>
    </>
);}

export default Home;

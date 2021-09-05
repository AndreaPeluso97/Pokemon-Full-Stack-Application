import React from 'react';
import styled from "styled-components";
import tw from "twin.macro"
import { Navbar } from '../../components/navbar';
import { AboutMe } from '../AboutMe/aboutMe';
import { MainSection } from './MainSection';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { TeamListing } from '../TeamListing/TeamListing';

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

export function HomePage() {
    
    return (
        <PageContainer>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={MainSection}/>
                    <Route path="/about-me" exact component={AboutMe}/>
                    <Route path="/team/list" exact component={TeamListing}/>
                </Switch>
            </Router>
        </PageContainer>
    );
}
import React from 'react';
import styled from 'styled-components';
import SideNav from '../src/Components/SideNav';
import Header from '../src/Components/Header';
import Chat from '../src/Components/Chat';
import JobOpenings from '../src/Components/JobOpenings';
import SkillsGraph from '../src/Components/SkillsGraph';

const AppContainer = styled.div`
    display: flex;
`;

const MainContent = styled.div`
    flex: 1;
    background: #f3f4fb;
    padding: 20px;
`;

const ContentRow = styled.div`
    display: flex;
    justify-content: space-between;
`;
const App = () => {
  return (
      <AppContainer>
          <SideNav />
          <MainContent>
              <Header />
              <ContentRow>
                  <Chat />
                  <JobOpenings />
              </ContentRow>
              <SkillsGraph />
          </MainContent>
      </AppContainer>
  );
}

export default App;

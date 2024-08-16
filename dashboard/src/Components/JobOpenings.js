import React from 'react';
import styled from 'styled-components';

const JobBox = styled.div`
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 20px;
    flex: 1;
`;

const JobHeader = styled.div`
    font-weight: bold;
    margin-bottom: 10px;
`;

const JobList = styled.ul`
    list-style: none;
    padding: 0;
`;

const JobItem = styled.li`
    background: #f5f5f5;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
`;

const JobOpenings = () => {
    return (
        <JobBox>
            <JobHeader>Job Openings</JobHeader>
            <JobList>
                <JobItem>Full Stack Developer - Bangalore, Karnataka</JobItem>
                <JobItem>HR Intern - Gurugram</JobItem>
                <JobItem>Power BI Developer - Bangalore, Karnataka</JobItem>
                <JobItem>Junior PHP Developer - Bangalore, Karnataka</JobItem>
            </JobList>
        </JobBox>
    );
}

export default JobOpenings;

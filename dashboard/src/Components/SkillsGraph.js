import React from 'react';
import { Radar } from 'react-chartjs-2';
import styled from 'styled-components';

const GraphBox = styled.div`
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 20px;
`;

const SkillsGraph = () => {
    const data = {
        labels: ['Communication', 'Technical Round', 'Behavioral Round', 'Team Work', 'Problem Solving', 'Adaptability'],
        datasets: [
            {
                label: 'Skill Assessment',
                data: [4, 3, 5, 4, 4, 3],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scale: {
            ticks: { beginAtZero: true },
        },
    };

    return (
        <GraphBox>
            <Radar data={data} options={options} />
        </GraphBox>
    );
};

export default SkillsGraph;

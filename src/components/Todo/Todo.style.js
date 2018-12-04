import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;

    & * {
        font-size: 24px;
	}
`;

export const Button = styled.button`
        border: 0;
        background: none;
        cursor: pointer;
		outline: 0;
`;

export const TodoText = styled.span`
	flex: 1;
	`;

export const TodoStatusFlair = styled.span`
	&::before {
		content: "${props => (props.completed ? '✔️' : '⭕')}"
	}
`;

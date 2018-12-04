import styled from 'styled-components';

export default styled.div`
    display: flex;
    margin-top: 30px;
	justify-content: space-between;
`;

export const Button = styled.button`
	border-width: 1px;
	border-style:  solid;
	border-color: ${props => (props.active ? '#3498db' : 'transparent')};
	border-radius: 3px;
	padding: 10px 25px;
	font-size: 18px;
	background: none;
	cursor: pointer;
	outline: 0;
`;

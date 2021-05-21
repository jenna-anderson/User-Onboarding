import styled from 'styled-components'

const StyledContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: baseline;
    /* background-color:  */
    width: 50%;
    margin: 2%;
    background-color: #c2cad3a6;
    padding: 2%2%;
    box-shadow: 0 0 10px grey;
`;

const StyledUser = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export default function User({ details }) {
    return(
        <StyledContainer>
            <h2>Welcome to the team {details.role}!</h2>
            <StyledUser>
                <div>Username: {details.username}</div>
                <div>Email: {details.email}</div>
            </StyledUser>
        </StyledContainer>
    )
}
import styled from 'styled-components'

const StyledForm = styled.form`
    margin: 5%;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 20vh;

    button{
        align-self: center;
        padding: 2%;
        cursor: pointer;
        border: none;
        background-color: #b69495c4;
        letter-spacing: 0.1rem;
        background-color: #50f150;
    }
    button:hover{
        transform: scale(1.1);
    }
    button:disabled{
        color: black;
        background-color: #c3a0a394;
        color: #524546;
        transform: scale(1);
    }
`;

const StyledLabel = styled.label`
    
`;


export default function Form({ values, submit, change, disabled, errors }) {  
    const onSubmit = event => {
        event.preventDefault()
        submit()
    }
    
    const onChange = event => {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }
    return(
        <StyledForm onSubmit={onSubmit}>
            <h2>Join the team</h2>
            <StyledDiv>
                <StyledLabel>Username&nbsp;
                    <input
                        value={values.username}
                        onChange={onChange}
                        name='username'
                        type='text'
                        data-test='name-test-input'
                    />
                </StyledLabel>
                <StyledLabel>Email&nbsp;
                    <input 
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='email'
                        data-test='email-test-input'
                    />
                </StyledLabel>
                <StyledLabel>Password&nbsp;
                    <input 
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='text'
                        data-test='password-test-input'
                    />
                </StyledLabel>
                <StyledLabel>Role&nbsp;
                    <select
                        onChange={onChange}
                        value={values.role}
                        name='role'
                        data-test='role-test-input'> 
                        <option value=''>-- Select Type --</option>
                        <option value='distance runner'>Distance Runner</option>
                        <option value='sprinter'>Sprinter</option>
                        <option value='thrower'>Thrower</option>
                        <option value='jumper'>Jumper</option>
                        <option value='multi'>Multi</option>
                        <option value='coach'>Coach</option>
                        <option value='trainer'>Trainer</option>
                    </select>
                </StyledLabel>
                <StyledLabel>Do you agree to the terms and conditions?&nbsp;
                    <input 
                        type='checkbox'
                        name='terms'
                        onChange={onChange}
                        checked={values.terms}
                        data-test='terms-test-check'
                    />
                </StyledLabel>
                <button id='submitBtn' disabled={disabled}>Submit</button>
                <div>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </StyledDiv>
        </StyledForm>
    )
}
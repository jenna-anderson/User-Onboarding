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
        background-color: #fcea78b8;
        letter-spacing: 0.1rem;
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
            <h2>Add a User</h2>
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
                {/* <StyledLabel>Membership&nbsp;
                    <select> 
                        <option value=''>-- Select Type --</option>
                        <option value='trial'>trial</option>
                        <option value='basic'>Basic</option>
                        <option value='premium'>Premium</option>
                    </select>
                </StyledLabel> */}
                <StyledLabel>Do you agree to the terms and conditions?&nbsp;
                    <input 
                        type='checkbox'
                        name='terms'
                        onChange={onChange}
                        checked={values.true}
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
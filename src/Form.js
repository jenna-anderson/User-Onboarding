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
        <form onSubmit={onSubmit}>
            <h2>Add a User</h2>
            <div>
                <label>Username
                    <input
                        value={values.username}
                        onChange={onChange}
                        name='username'
                        type='text'
                    />
                </label>
                <label>Email
                    <input 
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='email'
                    />
                </label>
                <label>password
                    <input 
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='text'
                    />
                </label>
                <label>Do you agree to the terms and conditions?
                    <input 
                        type='checkbox'
                        name='terms'
                        onChange={onChange}
                        checked={values.terms}
                    />
                </label>
                <button disabled={false}>Submit</button>
            </div>
        </form>
    )
}
import * as yup from 'yup'

const formSchema = yup.object().shape({
        username: yup
        .string()
        .trim()
        .required('Username is required')
        .min(5, 'Username must be at least 5 characters long'),
    email: yup
        .string()
        .trim()
        .required("Email is required")
        .email('Must be a valid email address'),
    password: yup
        .string()
        .trim()
        .required("Password is required")
        .min(7, 'Password must  be at least 7 characters long'),
    terms: yup
        .string()
        .oneOf(['true'], 'Must accept terms and conditions')
})

export default formSchema
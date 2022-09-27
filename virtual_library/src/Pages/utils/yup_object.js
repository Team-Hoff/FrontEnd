import  * as Yup from 'yup';


export const yub_object = Yup.object({
    fullname: Yup.string()
    .required("Please enter your full name"),
    username: Yup.string()
    .required("Please enter a username")
    .min(4, "Username is too short")
    .max(15, "Username is too long"),
    email: Yup.string()
    .required("Please enter an email")
    .email("Invalid email address"),
    password: Yup.string()
    .required("Please enter a password")
    .min(5, "Password is too short")
    .required("Please enter a password"),
    repeatPassword: Yup.string()
    .required("Confirm Password")
    .oneOf([Yup.ref("password")], "Password is not the same"),
    yearselect: Yup.string()
    .oneOf(["Level 100", "Level 200", "Level 300", "Level 400"], "Select your Year")
    .required("Select your Year"),
    programmeselect: Yup.string()
    .oneOf(["Agricultural Engineering", "Chemical Engineering", "Civil Engineering", "Geomatic Engineering (Geodetic Engineering)", "Materials Engineering", "Mechanical Engineering", "Electrical & Electronic Engineering", "Computer Engineering", "Aerospace Engineering", "Petroleum Engineering", "Telecommunication Engineering", "Geological Engineering", "Biomedical Engineering", "Petrochemical Engineering", "Metallurgical Engineering"], "Select your Programme")
    .required("Select your Programme"),
  })


 
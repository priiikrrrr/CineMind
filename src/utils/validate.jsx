
export const checkValidData = (email,name, password) => {
    const isEmailValid = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=.{8,20})/.test(password);
    const isNameValid = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name);
    if (!isEmailValid) return "Email is not valid!";
    if (!isNameValid) return "Name is not valid!";
    if (!isPasswordValid) return "Password is not valid!";
  
    return null;
  };


const authentication = () => {

    if(localStorage.getItem('userType') === 'company')
        return 'company';
    else if (localStorage.getItem('userType') === 'employee')
        return 'employee';

    return 'NOT_AUTHENTICATED';

}

export default authentication;
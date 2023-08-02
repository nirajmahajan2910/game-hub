import apiclient from 'axios';

export default apiclient.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'ab6062e7fafd49019ab5e041abb08e22' //this is not secure it should be managed by backend API
    }
})
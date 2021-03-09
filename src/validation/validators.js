function emailValidator () {
    return function email (value) {
      return (value && !!value.match(/^[a-zA-Z0-9](([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))[a-zA-Z0-9]@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) || 'Please enter a valid email'
    }
  }
  
  function requiredValidator () {
    return function required (value) {
      return (value !== undefined && value !== null && value !== '') || 'This field is required'
    }
  }
  
  export {
    emailValidator,
    requiredValidator
  }
  

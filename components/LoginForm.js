import t from 'tcomb-form-native' ;


export const Form = t.form.Form ;

export const login = t.struct({
   email: t.String,
   password: t.String,
}) ;

export const loginOptions	=	{	
    fields:	{	
            email:	{	
                    placeholder:	'Email',	
                    auto:	'placeholders',	
                    error:	'Email	is	empty',	
                    stylesheet: {
                      ...Form.stylesheet,
                      textbox: {
                        ...Form.stylesheet.textbox,
                        normal: {
                          ...Form.stylesheet.textbox.normal,
                          backgroundColor: '#D9C3B5'
                        },
                        error: {
                          ...Form.stylesheet.textbox.error,
                          height: 200,
                        },
                      },
                    }
            },	
            password:	{	
                    placeholder:	'Password',	
                    auto:	'placeholders',	
                    error:	'Password	is	empty',	
                    password:	true,	
                    secureTextEntry:	true,	
                    stylesheet: {
                      ...Form.stylesheet,
                      textbox: {
                        ...Form.stylesheet.textbox,
                        normal: {
                          ...Form.stylesheet.textbox.normal,
                          backgroundColor: '#D9C3B5'
                        },
                        error: {
                          ...Form.stylesheet.textbox.error,
                          height: 200,
                        },
                      },
                    }
            }	
    },
  }


  
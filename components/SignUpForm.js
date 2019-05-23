import t from 'tcomb-form-native';

export const Form = t.form.Form;

export const signUp = t.struct({
  email: t.String,
  password: t.String,
  firstName: t.String,
  lastName: t.String,
  phoneNumber: t.String
});

export const signUpOptions = {
  fields: {
    email: {
      placeholder: 'Email',
      error: 'Email is empty',
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
    password: {
      placeholder: 'Password',
      error: 'Password is empty',
      password: true,
      secureTextEntry: true,
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
    firstName: {
      placeholder: 'First Name',
      error: 'First name is empty',
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
    lastName: {
      placeholder: 'Last Name',
      error: 'First name is empty',
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
    phoneNumber: {
      placeholder: 'Phone Number',
      error: 'Phone Number is empty',
      stylesheet: {
        ...Form.stylesheet,
        textbox: {
          ...Form.stylesheet.textbox,
          normal: {
            ...Form.stylesheet.textbox.normal,
            backgroundColor: '#D9C3B5',
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
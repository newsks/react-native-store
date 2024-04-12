type UserInformation = {
  email: string;
  password: string;
};

// 로그인 회원가입 유효성검사 공통 로직
function validateUser(values: UserInformation) {
  const errors = {
    email: '',
    password: '',
  };

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = '올바른 이메일 형식이 아닙니다.';
  }
  if (!(values.password.length >= 8 && values.password.length < 20)) {
    errors.password = '비밀번호는 8~20자 사이로 입력해주세요';
  }
  return errors;
}

function validateLogin(values: UserInformation) {
  return validateUser(values);
}

function validateSignup(values: UserInformation & {passwordConfirm: string}) {
  const errors = validateUser(values);
  const signupErrors = {...errors, passwordConfirm: ''};

  if (values.password !== values.passwordConfirm) {
    signupErrors.passwordConfirm = '비밀번호가 일치하지 않습니다';
  }

  return signupErrors;
}

// AddPostScreen
function validateAddPost(values: {title: string}) {
  const errors = {
    title: '',
    description: '',
  };
  if (values.title.trim() === '') {
    errors.title = '제목은 1~30자 이내로 입력해주세요';
  }
  return errors;
}

export {validateLogin, validateSignup, validateAddPost};

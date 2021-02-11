export const API_URL = 'http://127.0.0.1:7360/'

export function Login_POST(body) {
  return {
  url:  API_URL + 'login',
  options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  }
}

export function SignUp_POST(body) {
  return {
  url:  API_URL + 'signup',
  options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  }
}

export function User_GET(body) {
  return {
  url:  API_URL + 'users',
  options: {
      method: 'GET',
    }
  }
}

export function AllCnpjs_GET(body) {
  return {
  url:  API_URL + 'cnpj/get-all',
  options: {
      method: 'GET',
    }
  }
}

export function InfoCnpj_GET(body) {
  return {
  url:  API_URL + 'cnpj​/get​/',
  options: {
      method: 'GET',
    }
  }
}

export function Details_GET(body) {
  return {
  url:  API_URL + '​/cnpj​/get​/${cnpj}​/detail',
  options: {
      method: 'GET',
    }
  }
}
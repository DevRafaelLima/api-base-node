const clearCPF = (cpf: string): string => {
    return cpf.replace(/[.\-\s]/g, '');
}

const upperCase = (string: string) => {
    return string.toUpperCase();
}

const lowerCase = (string: string) => {
    return string.toLowerCase()
}

const extractNumbers = (input: string) =>  {
    return input.replace(/\D/g, '');
  }
export {
    clearCPF,
    upperCase,
    lowerCase,
    extractNumbers
}
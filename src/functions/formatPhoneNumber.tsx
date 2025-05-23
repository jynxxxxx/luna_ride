
export function formatPhoneNumber(value: string) {
  // Remove all non-numeric characters
  const numbers = value.replace(/\D/g, "");
  
  // Format as Korean phone number (010-1234-5678)
  if (numbers.length <= 3) {
    return numbers;
  } else if (numbers.length <= 7) {
    return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
  } else {
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
  }
};
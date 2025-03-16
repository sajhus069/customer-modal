import { customers } from "./customers";

export function fetchCustomers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(customers);
    }, 1000); // Simulate network delay
  });
}

export default interface Case {
  title: string;
  description: string;
  status: "Open" | "Closed";
  name: string;
  gender: "Male" | "Female" | "Other";
  age: number;
  phoneNumber: string;
  email: string;
  address: string;
  pinCode: string;
  timeOfCrime: Date;
  suspect?: string;
}

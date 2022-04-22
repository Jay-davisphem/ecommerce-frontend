import Title from "./Title";
import Input from "./Input";
export default function UserSettings() {
  return (
    <div className="container mx-auto align-middle max-w-sm">
      <Title title="User Settings" include={true} />
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Input id="first_name" placeholder="First Name" label={true} />
        <Input id="last_name" placeholder="Last Name" label={true} />
        <Input id="username" placeholder="Username" label={true} />
        <Input id="email" type="email" placeholder="Email" label={true} />
        <Input
          id="acc_number"
          placeholder="Accout Number"
          label={true}
          inputmode="numeric"
          pattern="^\d{10}$"
        />
        <Input
          id="phone_number"
          placeholder="Phone Number"
          label={true}
          pattern="^(\+?234|0)(81|80|70|90|91)\d{8}$"
        />
        <Input id="address" placeholder="Address" label={true} />
        <Input id="addr_state" placeholder="State" label={true} />
        <Input
          id="postcode"
          placeholder="Postal Code"
          label={true}
          pattern="^\d{5}$"
        />
        <Input
          id="password"
          type="password"
          placeholder="Password"
          label={true}
        />
        <Input
          id="confirm_password"
          type="password"
          placeholder="Confirm Password"
          label={true}
        />

        <button
          className="bg-sec hover:bg-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-48"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
}

import Input from "../../../shared/components/form/input";
import Select from "../../../shared/components/form/select";
import { useForm, SubmitHandler } from "react-hook-form";
import messageIcon from "../../../../public/images/message-box.svg";
import Image from "next/image";
export interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string | number;
}
const ConveyancingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  console.log(errors);

  const onSubmit: SubmitHandler<IFormInput> = (data, event) => {
    console.log(data);

    event?.target?.reset();
  };

  return (
    <div className="border rounded-xl mt-4 mx-4 p-6 lg:w-[60%] lg:h-[720px]">
      <div>
        <p className="font-bold text-sm text-default">
          Enter your details for your $220 conveyancing voucher and a free
          contract review
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 font-medium text-sm text-default"
      >
        <Input
          className="mb-4"
          type="text"
          {...register("firstName", { required: "this is required" })}
          id="firstName"
          label="First Name *"
          register={register}
        />
        <Input
          className="mb-4"
          type="text"
          {...register("lastName", { required: "this is required" })}
          id="lastName"
          label="Last Name *"
          register={register}
        />
        <Input
          className="mb-4"
          type="email"
          {...register("email", {
            required: "This is required",
            minLength: {
              value: 10,
              message: "min length is 4",
            },
          })}
          id="email"
          label="Email *"
          register={register}
        />
        <Input
          className="mb-4"
          type="tel"
          {...register("phone", {
            required: "This is required",
            minLength: {
              value: 10,
              message: "Min length is 10",
            },
          })}
          id="phone"
          label="Phone *"
          register={register}
        />
        <Select
          className="mb-4"
          value="Select Your State"
          id="state"
          label="State *"
          options={["Select Your State", "VIC", "WSB", "NSW"]}
        />
        <div className="flex-col pt-2 mb-6">
          <label htmlFor="">Comments or message</label>
          <textarea
            className="border block w-full rounded-lg p-3 m-1 ring-0 focus:ring-0 focus:outline-none"
            name="comments"
            id="comments"
            cols={10}
            rows={3}
          ></textarea>
        </div>
        <div className="flex justify-center px-4 py-2.5 font-bold text-white w-full disabled:opacity-50 disabled:pointer-events-none rounded-lg items-center bg-btn-color cursor-pointer hover:">
          <span className="relative w-12 h-4 cursor-pointer">
            <Image src={messageIcon} layout="fill" alt="button" />
          </span>
          <input
            className="cursor-pointer"
            type="submit"
            value="Redeem Offer"
          />
        </div>
      </form>
      <p className="text-center text-xs text-default opacity-75 font-medium mt-2">
        By submitting your details, you acknowledge that you accept our Privacy
        Policy.
      </p>
    </div>
  );
};

export default ConveyancingForm;

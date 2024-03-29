// import { Icon } from "@iconify/react";
import { Heading } from "../components/Heading";
import { Wrapper } from "../components/ui/Wrapper";
import { Navigation } from "../components/ui/Navigation";
import { Seo } from "../components/Seo";

export const Component = () => {
  const orders = [
    { id: "#uthgjfhur456frf", date: "12 March, 2024", status: "delivered" },
    { id: "#uthgjfhur456frf", date: "12 March, 2024", status: "delivering" },
    { id: "#uthgjfhur456frf", date: "12 March, 2024", status: "pending" },
    { id: "#uthgjfhur456frf", date: "12 March, 2024", status: "delivered" },
  ];

  return (
    <>
      <Seo
        title="Mhkasa | Order History"
        type="webapp"
        description="Experience smooth shopping"
        name=""
      />
      <Wrapper className="py-4">
        <Navigation
          location={[
            { description: "Home", to: "/", title: "Go to Home Page" },
            { description: "My Account", to: "/account" },
            { description: "Order History", to: "" },
          ]}
          className="text-[#3338] py-4"
          iconClassName="text-[#3339] text-2xl"
          currentLocationClassName="text-app-black"
        />
        <Heading>Order History</Heading>

        <div className="@container bg-white py-6 px-4 rounded-3xl my-4 md:px-8">
          <div className="grid font-bold border-b-2 pb-4 grid-cols-6">
            <p className="text-nowrap col-span-3 @md:col-span-2">Order No.</p>
            <p className="hidden text-center col-span-2 @md:block">Date</p>
            <p className="col-span-3 text-right @md:col-span-2">Status</p>
          </div>
          <ul className="py-2">
            {orders.map((order, i) => (
              <Order
                key={i}
                id={order.id}
                date={order.date}
                status={order.status}
              />
            ))}
          </ul>
        </div>
      </Wrapper>
    </>
  );
};

const Order = ({ id, date, status }) => {
  return (
    <li className="grid grid-cols-6 py-1">
      <p className="col-span-3 @md:col-span-2">{id}</p>
      <p className="hidden text-center col-span-2 @md:block">{date}</p>
      <p className="col-span-3 text-right rounded-full py-1 px-4 bg-app-ash-1 ml-auto w-fit @md:col-span-2">
        {status}
      </p>
    </li>
  );
};

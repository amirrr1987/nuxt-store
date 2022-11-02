import { Fragment } from "react";
import { Input, Button, Form } from "antd";
const signin = () => {
  return (
    <div className="shop-signin h-screen flex justify-center items-center bg-gray-100">
      <div className="container mx-auto px-8">
        <Form layout="vertical" className="w-1/3 lg:w-1/4 !mx-auto">
          <img
            className="w-1/2 m-auto rounded overflow-hidden mb-6"
            src="https://cdn-icons-png.flaticon.com/512/295/295128.png"
            title="sdf"
            alt="sdf"
          />
          <Form.Item
            label="email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              type="email"
              id="email"
              placeholder="name@flowbite.com"
              required
            />
          </Form.Item>
          <Form.Item
            label="Your password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input type="password" id="password" required />
          </Form.Item>
          <div className="grid grid-cols-2 gap-x-16 px-8">
            <Button type="primary">Signin</Button>
            <Button type="default">Register</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default signin;

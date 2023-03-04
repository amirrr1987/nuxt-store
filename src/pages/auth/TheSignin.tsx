import { Fragment, useState } from "react";
import { Input, Button, Form } from "antd";
import { LoginApi } from "../../services";
const signin = () => {
  const [phone, setPhone] = useState()
  const [password, setPassword] = useState()
  const loginHandler = async () => {
    // console.log(phone);
    const {data} = await LoginApi({ phone: phone, password: password })
    
    console.log('data',data.data);
    

  }
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
            label="phone"
            name="phone"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              type="tel"
              id="phone"
              placeholder="+989198881400"
              required
              value={phone}
              onInput={event => setPhone(event.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Your password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input type="password" id="password" required
              value={password}
              onInput={event => setPassword(event.target.value)} />
          </Form.Item>
          <div className="grid grid-cols-2 gap-x-16 px-8">
            <Button type="primary" onClick={loginHandler}>Signin</Button>
            <Button type="default">Register</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default signin;

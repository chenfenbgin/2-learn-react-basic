import React from "react";
import { useSearchParams, useParams } from "react-router-dom";

const About = () => {
  // 6. params 是一个对象： 对象里有一个get的方法
  // 用来获取对应的参数，把参数的名称作为get方法的实参传过来
  // const [params] = useSearchParams();
  // const id = params.get("id");
  // return <div>about: 得到login传过来的路由参数id值为： {id}</div>;

  // 7. useParams获取
  const params = useParams();
  console.log(params);
  return <div>about: 得到login传过来的路由参数id值为： {params.id}</div>;
};

export default About;

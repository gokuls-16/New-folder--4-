import { useLottie } from "lottie-react";
import groovyWalkAnimation from "./Loading.json";

const LoadingLottie = () => {
  const style = {
    height: 300,
  };
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return (
    <div className="h-screen flex justify-center items-center">{View}</div>
  );
};
export default LoadingLottie;

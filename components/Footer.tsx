type Props = {};

export default function Footer({}: Props) {
  return (
    <>
      <div className="flex flex-col gap-y-5 justify-between bg-gray-300 rounded-lg">
        <h3 className="font-bold text-4xl mx-10">
          Transforming Fitness with AI
        </h3>
        <div className="flex justify-start items-center gap-4 mx-5">
          <img src="/logo.jpg" alt="" className="w-16 rounded-xl" />
          <p className="text-lg">
            Empowering Your Fitness Journey—Every Step of the Way
          </p>
        </div>
        <div className="flex gap-10 justify-center items-center m-5">
          <div className="flex flex-col flex-1">
            <h4 className="text-xl font-bold">Contact Details</h4>
            <p>Phone: +91 9479364638</p>
            <p>Email: Guptashubh.200208@gmail.com</p>
            <p>Address: Naya Bazar, Gwalior, Madhya Pradesh, India, 474009</p>
          </div>
          <div className="flex flex-col flex-1">
            <h4 className="text-xl font-bold">Quick Links</h4>
            <a href="/">Home</a>
            <a href="#Products">Products</a>
            <a href="#About-us">About Us</a>
            <a href="">Privacy Policy</a>
          </div>
          <div className="flex flex-col flex-1">
            <h4 className="text-xl font-bold">Social media</h4>
            <a href="">LinkedIn</a>
            <a href="">Github</a>
            <a href="">InstaGram</a>
            <a href="">YouTube</a>
          </div>
        </div>
      </div>
    </>
  );
}

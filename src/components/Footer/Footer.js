const Footer = () => {
  return (
    <div className="border-t-2 border-gray-200">
      <div className="mx-24 my-4">
        <div className="grid grid-cols-5">
          <div>
            <div className="font-bold text-2xl tracking-wider mb-12">
              Funiro.
            </div>
            <div className="text-lg text-gray-400">
              400 University Drive Suite 200 Coral
              <br />
              Gables,
              <br />
              FL 33134 USA
            </div>
          </div>
          <div className="mx-32">
            <p className="mb-14 text-gray-400">Links</p>
            <p className="mb-14">Home</p>
            <p className="mb-14"> Shop</p>
            <p className="mb-14">About</p>
            <p className="mb-14">Contact</p>
          </div>
          <div className="mx-16">
            <p className="mb-14 text-gray-400">Help</p>
            <p className="mb-14">Payment Options</p>
            <p className="mb-14"> Returns</p>
            <p className="mb-14">Privacy Policies</p>
          </div>
          <div className="mx-8">
            <p className="mb-14 text-gray-400">Newsletter</p>
            <p className="mb-14 border-b-2 ">Enter Your Email Address</p>
          </div>
          <div className="mx-8">
            <p className="text-gray-400">SUBSCRIBE</p>
          </div>
        </div>
        <div className="border-t-2 border-gray-200">
          <p className="mt-10">2023 furniro. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;

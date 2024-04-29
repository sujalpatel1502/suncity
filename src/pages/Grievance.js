import React, { useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
const Grievance = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  // 6LdiH8kpAAAAAArpBkL1SNPmQ5InCYKNkbWjk-aq  site key

  // 6LdiH8kpAAAAADpJiE6ce1U4p_vlU-2e64Bc2wqe  secret key
  const captchaRef = useRef(null);
  const handleSubmit = (e) => {
    // console.log("====================================");
    // console.log("cameee");
    // console.log("====================================");
    e.preventDefault();
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
    // console.log("====================================");
    // console.log(token);
    // console.log("====================================");
  };
  return (
    <div className="flex justify-center items-center ">
      <div className="w-full max-w-[1124px] ">
        <div className="  px-5 md:px-20 py-9 text-2xl max-lg:flex justify-center items-center flex flex-col">
          <div class="font-[sans-serif]relative  rounded my-6 max-w-[1100px] w-full">
            <div class="items-center ">
              <div class=" bg-white rounded-lg shadow-lg border sm:p-10 p-4 w-full">
                <h2 class="text-3xl text-black text-center font-extrabold mb-6">
                  Fill the required information
                </h2>
                <form>
                  <div class="max-w-sm mx-auto space-y-4">
                    <input
                      type="text"
                      placeholder="Name"
                      class="w-full bg-gray-100 rounded py-3 px-6 text-sm outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      class="w-full bg-gray-100 rounded py-3 px-6 text-sm outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Phone No."
                      class="w-full bg-gray-100 rounded py-3 px-6 text-sm outline-none"
                    />

                    <textarea
                      placeholder="Message"
                      rows="6"
                      class="w-full bg-gray-100 rounded px-6 text-sm pt-3 outline-none"
                    ></textarea>
                    <ReCAPTCHA
                      className=""
                      sitekey="6LftI8kpAAAAADkUbmYftNc-u8VrLBJRLvDHwBFu"
                      ref={captchaRef}
                    />
                    <button
                      onClick={handleSubmit}
                      type="button"
                      class="text-[#333] mx-auto block relative bg-gray-100 hover:bg-gray-200 font-semibold rounded text-sm px-6 py-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16px"
                        height="16px"
                        fill="currentColor"
                        class="mr-2 inline"
                        viewBox="0 0 548.244 548.244"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                          clip-rule="evenodd"
                          data-original="#000000"
                        />
                      </svg>
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div>
            <h2 class="text-3xl text-black text-center font-extrabold mb-6">
              Grievance Redressal Policy
            </h2>
            <p className="font-light text-sm leading-[1.4rem]">
              <span className="font-normal">
                M/S Shree Chandramangal Suncity Marketing Private Limited
                (Suncity Solar)
              </span>
              has a appropriate approach towards the Solar
              Advisor/Distributor/Consumer and takes all precautions to offer
              the best product and services to them. However, in case of
              unavoidable circumstances Direct Selling entity have devised a
              perfect system to solve the problems that Solar
              Advisor/Distributor/ Consumers may face.
            </p>
            <p className="font-light text-sm mt-2 leading-[1.4rem]">
              The grievance is received by the company either by the below
              mentioned means. It is fed into the internal software. A unique
              ticket number is generated related to the same and it is intimated
              to the customer or the person who has intimated the same to us.
            </p>
            <div className="ml-3">
              <ol className="list-decimal list-inside">
                <li className="font-light text-sm mt-2 leading-[1.4rem]">
                  Direct selling entity complies with the Consumer Protection
                  (Direct Selling) Rules, 2021 and Consumer Protection Act, 2019
                  and have also instructed our Solar
                  Advisor/Distributor/Consumer to do so.
                </li>
                <li className="font-light text-sm mt-2 leading-[1.4rem]">
                  Direct selling entity maintains a record (online/offline) to
                  keep the track of Grievances received from Solar
                  Advisor/Distributor/Consumer in either of the mentioned modes
                  - Calls / Written Application / E-mail / Walk-in / Online
                  Grievance Cell, etc. Each Grievance is numbered (to facilitate
                  easy tracking), acknowledged within 48 working hours of its
                  receipt at the Grievance Redressal Cell and Direct selling
                  entity records the time taken to resolve it.
                </li>
                <li className="font-light text-sm mt-2 leading-[1.4rem]">
                  Grievances received are feeded into the internal Grievance
                  software. A unique track ID is generated against all the
                  Grievances and is intimated to the Solar Advisor/Distributor/
                  Consumer on their registered E-mail ID and Mobile Number
                  within 48 working hour of its receipt at the entity's end.
                </li>
                <li className="font-light text-sm mt-2 leading-[1.4rem]">
                  Solar Advisor/Distributor/Consumer need to keep the unique
                  track ID (Ticket Number) to secure with them in order to track
                  and follow-up the outcome. Direct Selling entity has appointed
                  Mr. Ronak Tawani, as the Grievance Redressal Officer. Contact
                  details of the Grievance Redressal Officer are as mentioned
                  below:
                </li>
                <div className="ml-6">
                  <ol className="list-disc">
                    <li className="text-sm mt-2 font-normal">
                      Grievance Redressal Officer
                    </li>
                    <p className="font-light text-sm mt-2">
                      <span className="font-normal">Name:</span> Mr.Ronak Tawani
                    </p>
                    <p className="font-light text-sm mt-2">
                      <span className="font-normal">Email:</span>{" "}
                      info@suncitysolar.in
                    </p>
                    <p className="font-light text-sm mt-2">
                      <span className="font-normal">Contact No:</span> +91
                      9950328765
                    </p>
                  </ol>
                </div>
                <li className="font-light text-sm mt-2 leading-[1.4rem]">
                  Grievance Redressal Committee will redress the grievance
                  within 30 working days from the date of receipt of Grievance.
                </li>
                <li className="font-light text-sm mt-2 leading-[1.4rem]">
                  In case there is a delay of more than 30 working days in
                  resolving the issue, he / she will inform the Solar
                  Advisor/Distributor/Consumer with reason of delay on their
                  registered E-mail ID or Contact info.
                </li>
                <li className="font-light text-sm mt-2 leading-[1.4rem]">
                  In case the Solar Advisor/Distributor/Consumer is still not
                  satisfied with the resolution offered, he/she can approach the
                  National Consumer Helpline or the State Consumer Helpline of
                  which the entity is a Convergence partner for effective
                  mediation/resolution and thereafter a Consumer Forum/Court of
                  appropriate jurisdiction
                </li>
              </ol>
            </div>
            <p className="font-light text-sm mt-3 leading-[1.4rem]">
              Note: This Grievance Redressal Mechanism to be read as part and
              partial of the Contract Agreement entered by a Solar
              Advisor/Distributor/Consumer as the same is not reproduced in the
              agreement for the sake of brevity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grievance;

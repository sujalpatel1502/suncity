import React, { useEffect } from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/Solarr.json";
import IndiaMap from "../assets/images/bigFan.svg";
const Legal = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[1124px] mt-6 px-5 md:px-2">
        <div className=" pb-5 text-2xl font-semibold md:text-3xl justify-center text-center">
          Compliance Documents
        </div>
        <div class="overflow-x-auto rounded-lg bg-white p-4 mt-6 mb-10 flex justify-center items-center">
          <table class="w-[88%] border-collapse border border-gray-200">
            <thead class="bg-[#222E3A]/[6%]"></thead>
            <tbody class="bg-[#f6f8fa]">
              <tr>
                <td class="border p-2 text-center">1</td>
                <td class="border p-2 ">CERTIFICATE OF INCORPORATION</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/1CERTIFICATEOFINCORPORATION.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">2</td>
                <td class="border p-2"> MEMORANDOM OF ASSOCIATION</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/2MEMORANDOMOFASSOCIATION.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">3</td>
                <td class="border p-2 ">ARTICLES OF ASSOCIATION</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/3ARTICLESOFASSOCIATION.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">4</td>
                <td class="border p-2 ">PERMANENT ACCOUNT NUMBER</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/4PERMANENTACCOUNTNUMBER.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">5</td>
                <td class="border p-2">TAX DEDUCTION ACCOUNT NUMBER</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/5TAXDEDUCTIONACCOUNTNUMBER.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">6</td>
                <td class="border p-2 ">GOODS AND SERVICE TAX REGISTRATION</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/6ALLGSTCERTIFICATE.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">7</td>
                <td class="border p-2">
                  GOODS AND SERVICE TAX FILLING RETURNS
                </td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/7GOODSANDSERIVETAXFILLINGRETURNS.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">8</td>
                <td class="border p-2">INCOME TAX FILLING RETURN</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/8INCOMETAXFILLINGRETURN.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">9</td>
                <td class="border p-2">FILLING AUDIT REPORT</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/9FILLINGAUDITREPORT.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">10</td>
                <td class="border p-2">TRADE MARK REGISTRATION CERTIFICATE</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/10TRADEMARKREGISTRATIONCERTIFICATE.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">11</td>
                <td class="border p-2">UDYAM REGISTRATION CERTIFICATE</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/11UDHYAMREGISTRATIONCERTIFICATE.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">12</td>
                <td class="border p-2">ISO REGISTRATION CERTIFICATE</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/12ISOREGISTRATIONCERTIFICATE.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">13</td>
                <td class="border p-2">METROLOGY CERTIFICATE</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/13METROLOGYCERTIFICATE.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">14</td>
                <td class="border p-2">BUSINESS PLAN</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/14BUSINESSPLAN.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">15</td>
                <td class="border p-2"> DECLARATION</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/16DECLARATION.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">16</td>
                <td class="border p-2 ">LIST OF DIRECTORS</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/17LISTOFDIRECTORS.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">17</td>
                <td class="border p-2 ">DIRECT SELLER AGREEMENT</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/4PERMANENTACCOUNTNUMBER.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">18</td>
                <td class="border p-2">GRIEVANCE REDRESSAL POLICY</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/4PERMANENTACCOUNTNUMBER.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">19</td>
                <td class="border p-2">ACTIVE / INACTIVE SELLERS LIST</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/4PERMANENTACCOUNTNUMBER.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">20</td>
                <td class="border p-2">NODAL OFFICER</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/21NODELOFFICER.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">21</td>
                <td class="border p-2r">CE REGISTRATION CERTIFICATE</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/23CEREGISTRATIONCERTIFICATE.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">22</td>
                <td class="border p-2">RECEIPT OF COPYRIGHT REGISTRATION</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/24RECIPTOFCOPYRIGHTREGISTRATION.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">23</td>
                <td class="border p-2">BRN REGISTRATION CERTIFICATE</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/25BRNREGISTRATIONCERTIFICATE.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">24</td>
                <td class="border p-2">START UP INDIA</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/26STARTUPINDIA.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">25</td>
                <td class="border p-2">ASSOCHAM</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/27ASSOCHAM.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td class="border p-2 text-center">26</td>
                <td class="border p-2">FICCI</td>
                <td class="border p-2 text-center">
                  <a
                    target="_blank"
                    href="https://www.suncitysolar.in/images/docs/28FICCI.pdf"
                  >
                    Download
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Legal;

// Legal

// <Lottie options={defaultOptions} height={400} width={400} />

// <img src={IndiaMap} className="object-contain h-full w-full" />
